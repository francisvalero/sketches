
new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.background(0);
		p.noStroke();
		p.smooth();
		p.fill(242,    204, 47, 160);
		// Yellow
		p.ellipse(47, 36, 64, 64);
		p.fill(174,    221, 60, 160);
		// Green
		p.ellipse(90, 47, 64, 64);
		p.fill(116, 193,    206, 160);
		// Blue
		p.ellipse(57, 79, 64, 64);
	  };

	  p.draw = function() {
		
	  };
	}, 
	'myContainer1'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		for (x = -16; x < 100; x += 10) { 
		  p.line(x, 0, x+15, 50);
		}
		p.strokeWeight(4);
		for (x = -8; x < 100; x += 10) { 
		  p.line(x, 50, x+15, 100);
		}
	  };
	}, 
	'myContainer2'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.noFill();
		for (d = 150; d > 0; d -= 10) { 
		  p.ellipse(50, 50, d, d); 
		}
	  };
	}, 
	'myContainer3'
);


new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		for (i = 0; i < 100; i += 2) { 
		  p.stroke(255-i);
		  p.line(i, 0, i, 200); 
		}
	  };
	}, 
	'myContainer4'
);


new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.fill(0, 76);
		p.noStroke();
		p.smooth();
		for ( y = -10; y <= 100; y += 10) {
		  for (x = -10; x <= 100; x += 10) {
			p.ellipse(x + y/8.0, y + x/8.0, 15 + x/2, 10);
		  }
		}
	  };
	}, 
	'myContainer5'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		for (y = 20; y <= 80; y += 5) {
		  for (x = 20; x <= 80; x += 5) {
			if ((x % 10) == 0) {
			  p.line(x, y, x+3, y-3);
			} else {
			  p.line(x, y, x+3, y+3);
			} 
		  }
		}
	  };
	}, 
	'myContainer6'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.noStroke();
		for (y = 0; y < 100; y += 10) {
		  for (x = 0; x < 100; x += 10) {
			p.fill((x+y) * 1.4);
			p.rect(x, y, 10, 10);
		  }
		}
	  };

	}, 
	'myContainer7'
);


new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.beginShape(p.TRIANGLE_FAN);
		p.vertex(10,    20);    
		p.vertex(75, 30);
		p.vertex(75, 50);
		p.vertex(90, 70);
		p.vertex(10,    20);    
		p.endShape();
	  };

	}, 
	'myContainer8'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.noFill();
		p.smooth();
		for ( x = 0; x < 100; x += 5) {
		  n = p.norm(x, 0.0, 100.0);
		  y = p.pow(n, 4);
		  y *= 100;
		  p.strokeWeight(n * 5);
		  p.ellipse(x, y, 120, 120);
		}
	  };

	}, 
	'myContainer9'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		for ( x = 0; x < 100; x++) {
			n = p.norm(x, 0.0, 100.0);

			val = n * 255.0;
			p.stroke(val);
			p.line(x, 0, x, 50);

			valSquare = p.pow(n, 4) * 255.0;
			p.stroke(valSquare);
			p.line(x, 50, x, 100);
		}
	  };

	}, 
	'myContainer10'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.background(116, 193,    206);
		x = 0;
		p.noStroke();
		for ( i = 51; i <= 255; i += 51) {
		  p.fill(129, 130, 87, i);
		  p.rect(x, 20, 20, 60);
		  x += 20;
		}
	  };

	}, 
	'myContainer11'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.background(56, 90, 94);
		p.smooth();
		x = 0;
		p.strokeWeight(12);
		for ( i = 51; i <= 255; i += 51) {
		  p.stroke(242, 204, 47, i);
		  p.line(x, 20, x+20, 80);
		  x += 20;
		}
	  };

	}, 
	'myContainer12'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.colorMode(p.HSB);
		for ( i = 0; i < 100; i++) {
		  p.stroke(i*2.5, 255, 255);
		  p.line(i, 0, i, 100);
		}
	  };

	}, 
	'myContainer13'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.colorMode(p.HSB, 360, 100, 100);
		for (i = 0; i < 100; i++) {
		  newHue = 200 - (i*1.2);
		  p.stroke(newHue, 70, 80);
		  p.line(i, 0, i, 100);
		}
	  };

	}, 
	'myContainer14'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		p.background(0);
		p.smooth();
		p.stroke(255, 120);
		p.translate(66, 33);
		// Set initial offset
		for (i = 0; i < 18; i++) {
		// 18 repetitions
		  p.strokeWeight(i);
		// Increase stroke weight
		  p.rotate(p.PI/12);
		// Accumulate the rotation
		  p.line(0, 0, 55, 0);
		}
	  };

	}, 
	'myContainer15'
);

new p5(
	function( p ) {
	  p.setup = function() {
		p.createCanvas(100, 100);
		
	  };

	}, 
	'myContainer16'
);
