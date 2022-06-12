import math

import pandas as pd
import numpy as np
import copy
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from keras.layers import Dense
from keras.layers import LSTM
from keras.models import Sequential
from sklearn.preprocessing import MinMaxScaler
from tensorflow.python.keras.layers import RepeatVector, Dropout, TimeDistributed
from numpy import array, zeros, argmin, inf, equal, ndim
# from scipy.spatial.distance import cdist
from sklearn.metrics.pairwise import manhattan_distances


def processData():
    df = pd.read_csv('../data/mrcj.csv')
    dataset = {}
    for i in df.iterrows():
        row = i[1]
        dataset[row['date']] = {}
    for j in df.iterrows():
        row = j[1]
        detail = {}
        if row['base'] == 0:
            detail['index'] = 0
        else:
            detail['index'] = row['price']/row['base']
        detail['price'] = row['price']
        detail['base'] = row['base']
        detail['weight3'] = row['weight3']
        detail['weight2'] = row['weight2']
        detail['weight1'] = row['weight1']
        dataset[row['date']][row['name']] = detail
    return dataset


def codeMap():
    df = pd.read_csv('../data/code.csv')
    idtoname = {}
    nametoid = {}
    for i in df.iterrows():
        row = i[1]
        idtoname[str(row['id'])] = row['name']
        nametoid[row['name']] = str(row['id'])
    return idtoname, nametoid


def initStructure(idtoname, datelist):
    dataset = {'0':{'index':0, 'children':''}}
    l1 = {}
    for i in idtoname:
        if len(i) == 1 and i != '0':
            l1[i] = {'index':0, 'children':''}
    dataset['0']['children'] = l1
    for i in dataset['0']['children']:
        temp = {}
        for j in idtoname:
            if len(j) == 3 and j[0:1] == i:
                temp[j] = {'index':0, 'children':''}
        dataset['0']['children'][i]['children'] = temp
    for i in dataset['0']['children']:
        for k in dataset['0']['children'][i]['children']:
            temp = {}
            for j in idtoname:
                if len(j) == 5 and j[0:3] == k:
                    temp[j] = {'index':0}
            dataset['0']['children'][i]['children'][k]['children'] = temp
    structure = {}
    for i in datelist:
        dataset1 = copy.deepcopy(dataset)
        structure[i] = dataset1
    return structure


def computeIndex(dataset, idtoname, nametoid, structure, datelist):
    datalist = {}
    cnt = 0
    for i in idtoname:
        datalist[i] = np.zeros(358)
    for i in datelist:
        for j in dataset[i]:
            index = dataset[i][j]['index']
            weight3 = dataset[i][j]['weight3']
            id = nametoid[j]
            structure[i]['0']['children'][id[0:1]]['children'][id[0:3]]['children'][id]['index'] = index
            datalist[id][cnt] = index
            structure[i]['0']['children'][id[0:1]]['children'][id[0:3]]['index'] += index*weight3/100
            datalist[id[0:3]][cnt] = structure[i]['0']['children'][id[0:1]]['children'][id[0:3]]['index']
        for j in range(1, 6):
            for k in structure[i]['0']['children'][str(j)]['children']:
                if k + '01' not in idtoname.keys():
                    name = idtoname[k + '02']
                else:
                    name = idtoname[k + '01']
                index = structure[i]['0']['children'][str(j)]['children'][k]['index']
                weight2 = dataset[i][name]['weight2']
                structure[i]['0']['children'][str(j)]['index'] += index*weight2/100
                datalist[str(j)][cnt] = structure[i]['0']['children'][str(j)]['index']
        for j in range(1, 6):
            index = structure[i]['0']['children'][str(j)]['index']
            name = idtoname[str(j) + '0101']
            weight1 = dataset[i][name]['weight1']
            structure[i]['0']['index'] += index*weight1/100
            datalist['0'][cnt] = structure[i]['0']['index']
        cnt = cnt + 1
    return datalist

def create_dataset(dataset, look_back):
    # 这里的look_back与timestep相同
    dataX, dataY = [], []
    for i in range(len(dataset) - look_back - 1):
        a = dataset[i:(i + look_back)]
        dataX.append(a)
        dataY.append(dataset[i + look_back])
    return np.array(dataX), np.array(dataY)

def train_model(index):
    scaler = MinMaxScaler(feature_range=(0, 1))
    index = scaler.fit_transform(np.array(index).reshape(-1, 1))

    # 训练数据太少 look_back并不能过大
    trainlist = index[0:280]
    testlist = index[280:]
    # for i in range(0, len(index)):
    #     if i % 3 == 0:
    #         testlist.append(index[i])
    #     else:
    #         trainlist.append(index[i])

    look_back = 3
    X_train, Y_train = create_dataset(trainlist, look_back)
    # print(trainlist,X_train.shape,X_train)
    # X_test, Y_test = create_dataset(testlist, look_back)
    X, Y = create_dataset(index, look_back)
    # # X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))
    # X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))
    # # X = np.reshape(X, (X.shape[0], X.shape[1], 1))
    # # print(X.shape)
    model = Sequential()
    model.add(LSTM(64, activation='relu', input_shape=(look_back, 1)))
    model.add(Dropout(rate=0.2))
    model.add(RepeatVector(look_back))
    model.add(LSTM(64, activation='relu', return_sequences=True))
    model.add(Dropout(rate=0.2))
    model.add(TimeDistributed(Dense(1)))
    model.compile(optimizer='adam', loss='mse')
    model.summary()

    model.fit(X_train, X_train, epochs=60, batch_size=1, verbose=2,)

    # make predictions
    Y_pre = model.predict(X)
    print(Y_pre)
    # 反归一化
    Y_pre = scaler.inverse_transform(np.array(Y_pre[:, -1]).reshape(-1, 1))
    X = scaler.inverse_transform(np.array(X[:, -1]).reshape(-1, 1))
    MAE = np.mean(np.abs(Y_pre - X), axis=1)
    diff = Y_pre - X
    # plt.hist(MAE, bins=30)
    # plt.show()
    MAE1 = MAE.copy()
    MAE1.sort()
    threshold = np.percentile(MAE1, 95)
    # print(MAE1)
    # print(threshold)
    #0.05
    print(np.sum(MAE > threshold))
    x = []
    y = []
    for i in range(0, len(MAE)):
        if MAE[i] > threshold:
            x.append(i)
            y.append(index[i])
            print(datelist[i+4])
    plt.plot(X)
    # plt.plot(index)
    plt.plot(Y_pre)
    # plt.scatter(x, y, s=10, c='r')
    plt.show()
    result = []
    for i in MAE:
        if i > threshold:
            result.append('True')
        else:
            result.append('False')
    return result, diff, MAE


# def save(result, id, diff, MAE, number, fileName, datelist):
#     books = []
#     for i in range(0, len(result)):
#         book = {
#          'date': datelist[i+2],
#          'id': id,
#          'diff': diff[i],
#          'result': result[i],
#           'MAE': MAE[i]
#         }
#         books.append(book)
#
#     data = pd.DataFrame(books)
#     # 写入csv文件,'a+'是追加模式
#     if number == 1:
#         csv_headers = ['date', 'id', 'diff', 'result',  'MAE']
#         data.to_csv(fileName, header=csv_headers, index=False, mode='a+', encoding='utf-8')
#     else:
#         data.to_csv(fileName, header=False, index=False, mode='a+', encoding='utf-8')


# def Dtw(a, b):
#     dis = np.full((len(a) + 1, len(b) + 1), np.inf)
#     dis[0, 0] = 0
#     for i in range(0, len(a)):
#         for j in range(0, len(b)):
#             dis[i + 1, j + 1] = (a[i] - b[j]) ** 2
#     for i in range(1, len(a) + 1):
#         for j in range(1, len(b) + 1):
#             dis[i, j] = min(dis[i - 1, j - 1], dis[i, j - 1], dis[i - 1, j]) + dis[i, j]
#     result = dis[len(a)-1, len(b)-1] / (len(a) + len(b))
#     return result

def fun_calDiff(data):
    data_diff = []
    for i in range(len(data)-1):
        data_diff.append(data[i+1]-data[i])
    return data_diff



if __name__ == '__main__':
    dataset = processData()
    datelist = ["2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5", "2018/12/6", "2018/12/7", "2018/12/8",
     "2018/12/9", "2018/12/10",
     "2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15", "2018/12/16", "2018/12/17", "2018/12/18",
     "2018/12/19", "2018/12/20",
     "2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28",
     "2018/12/29", "2018/12/30", "2018/12/31",
     "2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5", "2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9",
     "2019/1/10",
     "2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15", "2019/1/16", "2019/1/17", "2019/1/18",
     "2019/1/19", "2019/1/20",
     "2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28",
     "2019/1/29", "2019/1/30", "2019/1/31",
     "2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5", "2019/2/6", "2019/2/7", "2019/2/9", "2019/2/10",
     "2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15", "2019/2/16", "2019/2/17", "2019/2/18",
     "2019/2/19", "2019/2/20",
     "2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
     "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5", "2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10",
     "2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15", "2019/3/16", "2019/3/17", "2019/3/18",
     "2019/3/19", "2019/3/20",
     "2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28",
     "2019/3/29", "2019/3/30", "2019/3/31",
     "2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5", "2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9",
     "2019/4/10",
     "2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15", "2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19",
     "2019/4/20",
     "2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28",
     "2019/4/29", "2019/4/30",
     "2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5", "2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9",
     "2019/5/10",
     "2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15", "2019/5/16", "2019/5/17", "2019/5/18",
     "2019/5/19", "2019/5/20",
     "2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28",
     "2019/5/29", "2019/5/30", "2019/5/31",
     "2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5", "2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10",
     "2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15", "2019/6/16", "2019/6/17", "2019/6/18",
     "2019/6/19", "2019/6/20",
     "2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28",
     "2019/6/29", "2019/6/30",
     "2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5", "2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9",
     "2019/7/10",
     "2019/7/11", "2019/7/12", "2019/7/13", "2019/7/14", "2019/7/15", "2019/7/16", "2019/7/17", "2019/7/18",
     "2019/7/19", "2019/7/20",
     "2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28",
     "2019/7/29", "2019/7/30", "2019/7/31",
     "2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5", "2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9",
     "2019/8/10",
     "2019/8/11", "2019/8/12", "2019/8/13", "2019/8/14", "2019/8/15", "2019/8/16", "2019/8/17", "2019/8/18",
     "2019/8/19", "2019/8/20",
     "2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28",
     "2019/8/29", "2019/8/30", "2019/8/31",
     "2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5", "2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9",
     "2019/9/10",
     "2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15", "2019/9/16", "2019/9/17", "2019/9/18",
     "2019/9/19", "2019/9/20",
     "2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28",
     "2019/9/29", "2019/9/30",
     "2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5", "2019/10/6", "2019/10/7", "2019/10/8",
     "2019/10/9", "2019/10/10",
     "2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15", "2019/10/16", "2019/10/17", "2019/10/18",
     "2019/10/19", "2019/10/20",
     "2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28",
     "2019/10/29", "2019/10/30", "2019/10/31",
     "2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5", "2019/11/6", "2019/11/7", "2019/11/8",
     "2019/11/9", "2019/11/10",
     "2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15", "2019/11/16", "2019/11/17", "2019/11/18",
     "2019/11/19", "2019/11/20",
     "2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26", "2019/11/27"]
    idtoname, nametoid = codeMap()
    structure = initStructure(idtoname, datelist)
    datalist = computeIndex(dataset, idtoname, nametoid, structure, datelist)
    di = fun_calDiff(datalist['1'])
    # train_model(datalist['101'])
    # plt.plot(datalist['101'])
    # plt.plot(di)
    # plt.show()
    result, diff, MAE = train_model(di)
    # index = []
    # number = 1
    # fileName = '../data/result1.csv'
    #
    # for i in datalist:
    #     data = datalist[i]
    #     id = i
    #     result, diff, MAE = train_model(data)
    #     save(result, id, diff, MAE, number, fileName, datelist)
    #     number = number + 1






    # ind = pd.DataFrame(index, columns=['ind'])
    # aa = ind.diff(1)
    # plt.plot(aa)
    # plt.show()
    # from statsmodels.tsa.stattools import acf, pacf
    # import statsmodels.api as sm
    # import matplotlib.pyplot as plt
    # import numpy as np

    # # # 3.1.分别画出ACF(自相关)和PACF（偏自相关）图像
    # # fig = plt.figure(figsize=(12, 8))
    # #
    # # ax1 = fig.add_subplot(211)
    # # fig = sm.graphics.tsa.plot_acf(aa, lags=20, ax=ax1)
    # # ax1.xaxis.set_ticks_position('bottom')
    # # fig.tight_layout()
    # #
    # # ax2 = fig.add_subplot(212)
    # # fig = sm.graphics.tsa.plot_pacf(aa, lags=20, ax=ax2)
    # # ax2.xaxis.set_ticks_position('bottom')
    # # fig.tight_layout()
    # # plt.show()
    # # 建立ARIMA模型
    # model = sm.tsa.ARIMA(ind, (1, 1, 1))  # 使用最小二乘，‘mle’是极大似然估计
    # res = model.fit(method='css')
    # pre = res.predict()
    # # diff_shift_ts = aa.shift(1)
    # # diff_recover_1 = pre.add(diff_shift_ts)
    # # print(pre, diff_shift_ts, diff_recover_1)
    # plt.plot(ind, color='blue', label='Sales')
    # plt.plot(pre, color='red', label='Predicted Sales')
    # plt.show()

    # 上面代码的片段讲解
    # indd = index.copy()
    # diff = []
    # for i in range(0, len(index)-1):
    #     if i == 0:
    #         diff.append(0)
    #     else:
    #         diff.append(index[i+1]-index[i])

