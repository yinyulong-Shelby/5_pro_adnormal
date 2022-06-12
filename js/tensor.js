
//曲线拟合方法
function fit(ys,pos){
  console.log(ys,pos)
    var xs=[]
    var xpos;
    if(pos<=10){
        var k=0;
        xpos=pos;
        for(var i=1;i<=21;i++){
            if(k!=pos){
              
                xs[k]=i;
                k++; 
            }
            
        }
    }
    else{
        xs=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21];
        xpos=11;
    }
    console.log(xs);
  const xst = tf.tensor(xs, [xs.length, 1]);
  const yst = tf.tensor(ys, [ys.length, 1]);

  function get_weights(shape) {
    return (tf.variable(tf.randomNormal(shape)));
  }

  function get_bais(shape) {
    return (tf.variable(tf.fill(shape, 0.1)));
  }
  const w1 = get_weights([1, 10]);
  const w2 = get_weights([10, 1]);
  const b1 = get_bais([1, 10]);
  const b2 = get_bais([1, 1]);

  function predict(x) {
    return tf.tidy(() => {
      const l1 = tf.elu(tf.add(tf.matMul(x, w1), b1)); //不支持运算符重载 tf.add() 不能写成 +
      const y = tf.add(tf.matMul(l1, w2), b2);
      return y;
    });
  }

  function loss(predictions, labels) {
    // 将labels（实际的值）进行抽象
    // 然后获取平均数.
    return tf.tidy(() => {
      const meanSquareError = tf.mean(tf.square(tf.sub(predictions, labels)));
      return meanSquareError;
    });
  }
  const learningRate = 1;
  const optimizer = tf.train.adagrad(learningRate);
  const numIterations = 1001;

  function training() {
    for (var iter = 0; iter < numIterations; iter++) {
      optimizer.minimize(() => {
        const loss_var = loss(predict(xst), yst);
        if(iter % 100 ==0)
          loss_var.print();
        return loss_var;
      })
    }
  }

  training();
  const text_xs = tf.tensor([xpos], [1, 1]);
  predict(text_xs)
  const tensorData = predict(text_xs).dataSync();
  return tensorData[0].toFixed(2);
}