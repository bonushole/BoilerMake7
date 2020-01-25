window.onload = initialize;
var segments = [];
var clips = [];
var thumbs = [];
var host = window.location.host;
function initialize(){
	fetchSegments();
	fetchSources();
	
}
function getThumbFromId(thisId, sourceId){
	var thisThumb = null;
	
	
	for(var i=0; i < thumbs.length; i++){
		
		var thumb = thumbs[i];	
		console.log("found thumbnail");
		if(thumb.id == thisId){
		
			thisThumb = thumb;
		
		}
		
	}
		
	
	if(thisThumb == null){
		var newImg = new Image;
		var canvas = document.createElement("CANVAS");
		canvas.height = 30;
		canvas.width = 30;
		//segment.appendChild(canvas);	
		newImg.onload = function() {
			canvases = [];
	//		document.querySelector(this.src).replaceWith(this);
			/*
			console.log("loaded image");
    			console.log(this.src.split("/"));
    			var id = parseInt((this.src).split("/")[(this.src).split("/").length - 1].split(".")[0]);
    			console.log(id);
    			for(var i = 0; i< thumbs.length; i++){
    				thumb = thumbs[i];
    				console.log(thumb.id +"  " +id);
    				if(thumb.id == id){
    				
    					canvases.push(thumb.image);
    				}
    				
    			}
    			*/
    			canvas.getContext("2d").drawImage(this,0,0,30,30);
    			/*
    			for(var i = 0; i < canvases.length; i++){
    				canvas = canvases[i];	
				canvas.getContext("2d").drawImage(this,0,0,30,30);
    			}
    			*/
		}
	
		newImg.src = '/THUMBS/'+sourceId+'.png';
		thisThumb = {id:thisId, image:canvas};
		thumbs.push(thisThumb);
	}
	return thisThumb;
}
function updateClips(){
	var sourceClips = document.getElementById("sourceClips");
	
	while(sourceClips.firstChild){
		sourceClips.removeChild(sourceClips.firstChild);
	}
	
	console.log(clips);
	for(var i = 0; i< clips.length; i++){
		var clip = clips[i];
		console.log(clip);
		var segment = document.createElement("div");
		
		var thisThumb = getThumbFromId(clip.id, clip.id);
		
		
		segment.appendChild(thisThumb.image);//thumbs.src;
		
		segment.draggable = "true";
		segment.ondragstart = drag;
		
		segment.className = "segment";
		sourceClips.appendChild(segment);
	
	}
	console.log(thumbs);
}
function updateTimeline(){
	var timeline = document.getElementById("timeline");
	
	while(timeline.firstChild){
		timeline.removeChild(timeline.firstChild);
	}
	
	var divs = [];
	
	var newDiv = document.createElement("div");
	
	newDiv.className = "emptyCell";
	timeline.appendChild(newDiv);
	console.log(segments);
	for(var i = 0; i < segments.length; i++){
		
		var segment = segments[i];
		console.log(segment);
		
		var segmentDiv = document.createElement("div");
		segmentDiv.className = "segment";
		timeline.appendChild(segmentDiv);
		
		thumb = getThumbFromId(segment.segmentID, segment.sourceFileID);
		segmentDiv.appendChild(thumb.image);
		
		newDiv = document.createElement("div");
		
		newDiv.className = "emptyCell";
		timeline.appendChild(newDiv);
	
	}
	
	
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
	var index = 0;
	var child = ev.target;
	while( (child = child.previousSibling) != null ){ 
		index++;
	}
	console.log("source index");
	console.log(index);
	ev.dataTransfer.setData("text", clips[index].id);
}
function drop(ev) {
	//ev.preventDefault();
	var id = parseInt(ev.dataTransfer.getData("text"));
	//ev.target.appendChild(document.getElementById(data));
	
	console.log(segments);
	console.log("source id");
	console.log(id);
  	var child = ev.target;
  
	var index = 0;
	while( (child = child.previousSibling) != null ){ 
		index++;
	}
	index = index/2;
	
	var following;
	
	if(index ==0){
		following = -1;
	}else{
		following  = segments[index].segmentID;
	}
	
	ajaxInsert(id, following);
	//segments.splice(index,0,"");
	//updateTimeline();
}
function ajaxInsert(clipId, segmentFollowing){
	console.log("inserting");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			segments = JSON.parse(this.responseText);
			updateTimeline();
		}
	};
	xhttp.open("GET", "/insert?sourceFileID=" + clipId + "&afterID=" + segmentFollowing + "&start=0&end=0&totalLength=0", true);
	xhttp.send();
	
}
function cloneCanvas(oldCanvas) {
    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');
    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;
    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);
    //return the new canvas
    return newCanvas;
}
function render(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			alert("render complete");
			//document.getElementById("downloadButton").visibility = "visible";
		}
	};
	xhttp.open("GET", "/render", true);
	xhttp.send();
}
function clr(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	
		}
	};
	xhttp.open("GET", "/clear", true);
	xhttp.send();
}
function doSubmit(oFormElement){
	console.log("got here");
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		clips = JSON.parse(xhr.responseText);
		updateClips();
		
	 } // success case
	xhr.onerror = function(){ alert (xhr.responseText); } // failure case
	xhr.open (oFormElement.method, oFormElement.action, true);
	xhr.send (new FormData (oFormElement));
	return false;
	
	
	/*
	var url = host +"/upload";
	fetch(url, {
		method : "POST",
		body: new FormData(document.getElementById("inputform")),
    // -- or --
    // body : JSON.stringify({
        // user : document.getElementById('user').value,
        // ...
    // })
	}).then(
		response => response.text() // .json(), etc.
    // same as function(response) {return response.text();}
	).then(
	html => console.log(html)
	);
	*/
}
function fetchSegments(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			segments = JSON.parse(this.responseText);
			updateTimeline();
			//pollSegments();
			setTimeout(fetchSegments,2000);
		}
	};
	xhttp.open("GET", "/retrieveSegments", true);
	xhttp.send();
	
}
function fetchSources(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			clips = JSON.parse(this.responseText);
			updateClips();
			//pollSources();
			setTimeout(fetchSources,2000);
		}
	};
	xhttp.open("GET", "/retrieveSources", true);
	xhttp.send();
	
}
function pollSegments(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.timeout=9999999999999999;
	xhttp.ontimeout = pollSegments;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("receiving long polling data");
			segments = JSON.parse(this.responseText);
			updateTimeline();
			pollSegments();
		}
	};
	xhttp.open("GET", "/holdSegmentsRequest", true);
	xhttp.send();
	
}
function pollSources(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.timeout=9999999999999999;
	xhttp.ontimeout = pollSources;
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("receiving long polling data");
			clips = JSON.parse(this.responseText);
			updateClips();
			pollSources();
		}
	};
	xhttp.open("GET", "/holdSourcesRequest", true);
	xhttp.send();
	
}

