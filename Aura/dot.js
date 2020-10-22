				var S = {
					start: function(){
						Drawing.init();
						var d = new Dot(5,20);
						Drawing.loop(function (){
							d.move();
							});
						}
					};
				Dot = function(x,y){
					this.x = x;
					this.y = y;
					this.z = 5;
					this.h =1;
					};
				Dot.prototype = {
					move: function(){
						this.x = Math.random() * window.innerWidth ;
						this.y = Math.random() * window.innerHeight ;
						Drawing.drawDot(this);
						}
					};
				Drawing = (function(){
					var canvas,context,animatefn,
							requestFrame = window.requestAnimateFrame ||
														 window.webkitRequestAnimationFrame ||
														 window.mozRequestAnimationFrame ||
														 window.oRequestAnimateFrame ||
														 window.msRequestAnimateFrame ||
														 function(callback){
														 	window.setTimeout(callback,1000/60);
														 	};
					return {
						init: function(){
						canvas = document.querySelector('.canvas');
						context = canvas.getContext('2d');
						canvas.width = window.innerWidth;
						canvas.height = window.innerHeight;
						},
						drawDot: function(dot){
							context.fillStyle = 'rgb(0, 0, 0)';
							context.beginPath();
							context.arc(dot.x ,dot.y ,dot.z,0,2 * Math.PI,true);
							context.closePath();
							context.fill();
							},
						clearAnimate: function(){
							context.clearRect(0,0,canvas.width,canvas.height);
							},
						loop: function(fn){
							animatefn = !animatefn ? fn : animatefn;
							//this.clearAnimate();
							animatefn();
							requestFrame.call(window,this.loop.bind(this));
							}
						}
						let eraseEnable = false

						function mouseClicked() {
							if (eraseEnable) {
								noErase();
								eraseEnable = false;
							}
							else {
								erase('Dot');
								eraseEnable = true;
							}
						}
					}());
					S.start();
