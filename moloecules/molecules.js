function Circle() {
    
	this.initialize = function(){
		this.tx = random(1,1000);
		this.ty = random(1,1000);
		this.r =60;
		this.g = Math.ceil(random(100,255));
		this.b = Math.ceil(random(100,255));
		this.x = 0;
		this.y = 0;
		this.z = 0;
		
	}
	
	this.draw = function(){
		this.x = map(noise(this.tx), 0, 1, 0, width );
		this.y = map(noise(this.ty), 0, 1, 0, height );
		fill('rgba('+ this.r +','+ this.g +','+ this.b +',0.3)');
		ellipse(this.x, this.y, 30, 30);
		fill(0);
		ellipse(this.x , this.y , 4,4);
		this.tx += 0.001;
		this.ty += 0.001;
	}
}




function createRandomCircles(n){
	var list =  [];
	for(i = 0; i < n; i++){
		var c = new Circle();
		c.initialize();
		list.push(c);
	}
	return list;
}
function drawConnections(list){
	fill(0);
	stroke('rgba(0,0,0,0.7)');
	strokeWeight(0.3);
	for(i = 0; i < list.length; i++){
		var c1 = list[i];
		for(j = i + 1; j < list.length; j++){
			var c2 = list[j];
			if(dist(c1.x, c1.y, c2.x, c2.y) < 50){
				line(c1.x, c1.y, c2.x, c2.y);
			}
		}
	}
}


var circles = [];

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('myContainer');
	canvas.style('width:100%; height:100%');
	circles = createRandomCircles(100);
}

function draw(){
	fill(255);
	noStroke();
	rect(0,0,width, height);
	for(c in circles){
		circles[c].draw();
	}
	drawConnections(circles);
}




