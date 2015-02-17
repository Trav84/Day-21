var GameView = Backbone.View.extend({
	el: '#game-screen',

	initialize: function(options) {

		this.$document = $(document);

		//$(window).on('keyup', this.onKeyUp);

		// var c = document.getElementById("tutorial");
		

		// var unicornChar = new Image();
  // 		unicornChar.src = "unicorn_aa.png";

  // 		var x = 0;
  // 		var y = 0;

  // 		unicornChar.onload = function() {
  //   	context.drawImage(unicornChar, x, y);
  // 		},

		//BEGIN LIBRARY CODE
		var x = 150;
		var y = 245;
		var dx = 2;
		var dy = 4;
		var WIDTH;
		var HEIGHT;
		var ctx;
		var unicornChar = new Image();
  		unicornChar.src = "unicorn_aa.png";
  		var rightDown = false;
		var leftDown = false;
		var jump = false;

  		//set rightDown or leftDown if the right or left keys are down
		function onKeyDown(evt) {
			if (evt.keyCode == 39) rightDown = true;
			else if (evt.keyCode == 37) leftDown = true;
			else if (evt.keyCode === 38) upDown = true;
			else if (evt.keyCode === 32) jump = true;
		}

		//and unset them when the right or left key is released
		function onKeyUp(evt) {
			if (evt.keyCode == 39) rightDown = false;
			else if (evt.keyCode == 37) leftDown = false;
			else if (evt.keyCode === 38) upDown = false;
			else if (evt.keyCode === 32) jump = false;
		}

		this.$document.keydown(onKeyDown);
		this.$document.keyup(onKeyUp);

		function init() {
			ctx = $('#tutorial')[0].getContext("2d");
			WIDTH = $("#tutorial").width();
			HEIGHT = $("#tutorial").height();
			return setInterval(draw, 10);
		}

		function circle(x,y,r) {
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
		}

		function rect(x,y,w,h) {
			ctx.beginPath();
			ctx.rect(x,y,w,h);
			ctx.closePath();
			ctx.fill();
		}

		function clear() {
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
		}

		function drawImage(image,x,y) {
			ctx.drawImage(image, x, y);
		}

		function flipImage(image, ctx) {
	    	var scaleH = (-1,1);  // Set horizontal scale to -1 if flip horizontal
	        posX = WIDTH * (-1,1); // Set x position to -100% if flip horizontal 
    
		    ctx.save(); // Save the current state
		    ctx.scale(scaleH, 1); // Set scale to flip the image
		    ctx.drawImage(image, posX, y, x, y); // draw the image
		    ctx.restore(); // Restore the last saved state
		};

		//END LIBRARY CODE

		function draw() {
			clear();

			var canMoveLeft = true;
			var canMoveRight = true;
			var canJump = true;

			if((x+79) >= WIDTH) {
				canMoveRight = false;
			} else if (x <= 0) {
				canMoveLeft = false;
			}

			if (rightDown && canMoveRight) {
				x += 5;
			}
  		
  			if (leftDown && canMoveLeft) {
  				x -= 5;
  			}

  			else if(jump && canJump) {
  			}
		 
			drawImage(unicornChar, x, y);
			//ctx.scale(-1,1);

		}

		init();

		//ctx.strokeRect(335,100,10,100);
		//ctx.strokeRect(300,200,75,75);

		// makeUnicorn = function(x, y, width, height) {
		// 	context.fillStyle = "#0000FF";
		// 	context.fillRect(x, y, width, height);
		// 	x+-1;
		// };

		// unicornCharacter = new makeUnicorn(300, 200, 50, 50);

		// update = function(key) {
		// 	var value = key.which;

	 //    	if(value == 37) { // left arrow
	 //    		unicornCharacter.x -= 5;
	 //    		} else if (value == 39) { // right arrow
	 //    			unicornCharacter.x += 5;
	 //    		} else {
	 //    			console.log('no move');
		// 		}
		// 		makeUnicorn(unicornCharacter);
		// 	};
		
		// function draw() {
	 //  	var canvas = document.getElementById('canvas');
		//   	if (canvas.getContext){
		//      var ctx = canvas.getContext('2d');

		//     ctx.beginPath();
		//     ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
		//     ctx.moveTo(110,75);
		//     ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
		//     ctx.moveTo(65,65);
		//     ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
		//     ctx.moveTo(95,65);
		//     ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
		// 	ctx.stroke();
		//   }
		// }
	},

});