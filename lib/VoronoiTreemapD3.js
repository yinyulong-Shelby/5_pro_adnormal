///////// from hierarchy.js

// A method assignment helper for hierarchy subclasses.
function d3_layout_hierarchyRebind(object, hierarchy) {
    //d3.rebind(object, d3.hierarchy, "sort", "children", "value");

    // Add an alias for nodes and links, for convenience.
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;

    return object;
}

// Returns an array source+target objects for the specified nodes.
function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
        return (parent.children || []).map(function(child) {
            return {source: parent, target: child};
        });
    }));
}

///////////////////////
// the actual implementation

d3.voronoitreemap = function() {
    var hierarchy = d3.hierarchy("").sort(null),
        root_polygon = [[0,0],[500,0],[500,500],[0,500]], // obviously stupid...set somehow
        iterations = 100,
        value = function (d) { return d.value; },
        somenewvariable = 0;

    function voronoitreemap(d, depth) {
      hierarchy = d3.hierarchy(d).sum(function(d){ if(FF==0){
        return +d.index;
  } 
  else if(FF==1){
    return +d.reweight;
  } 
  else{
    return +(d.index*d.reweight);
  } });
    	var root = hierarchy;
			
    	root.polygon = root_polygon;
	    root.site = null;  // hmm?

    	if (depth != null) {
	    	max_depth = depth;
    	} else {
    		max_depth = "Infinity";
	    }
    	var date = new Date();
	    var startTime = 0 + date.getTime();
	    computeDiagramRecursively(root, 0);
	    var endTime = (new Date).getTime();
	    // alert("TIME: " + (endTime - startTime));
    	return root;
    }

    function computeDiagramRecursively(node, level) {
    	var children = node.children;
    	if (children && children.length && level < max_depth) {
	        node.sites = VoronoiTreemap.init(node.polygon, node);  // can't say dataset, how about node?
	        VoronoiTreemap.normalizeSites(node.sites);
    	    VoronoiTreemap.sites = node.sites;
	        VoronoiTreemap.setClipPolygon(node.polygon);
	        VoronoiTreemap.useNegativeWeights = false;
    	    VoronoiTreemap.cancelOnAreaErrorThreshold = true;
	        var polygons = VoronoiTreemap.doIterate(iterations);
    	    // set children polygons and sites
	        for (var i = 0; i < children.length; i++) {
		        children[i].polygon = polygons[i];
        		children[i].site = VoronoiTreemap.sites[i];
		        // goes all the way down
        		computeDiagramRecursively(children[i], (level + 1));
    	    }
    	}
    }

    voronoitreemap.root_polygon = function(x) {
      if (!arguments.length)
          return root_polygon;
      root_polygon = x;
      return voronoitreemap;
      };

    voronoitreemap.iterations = function(x) {
      if (!arguments.length)
          return iterations;
      iterations = x;
      return voronoitreemap;
    };
  
  	voronoitreemap.value = function(x) {
      if (!arguments.length)
          return value;
      value = x;
      return voronoitreemap;
    };
	
  	return d3_layout_hierarchyRebind(voronoitreemap, hierarchy);
}
