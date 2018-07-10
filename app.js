var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function random(from,to){
	return Math.random()*(to-from) + from;
}

c.width = 240;
c.height = 320;


var imageLoaded = 0;
var playerImg = new Image();
var rockImg = new Image();
playerImg.src = "asset/asset0.png";
rockImg.src = "asset/asset1.png";

playerImg.onload = function(){
	imageLoaded++;
}
rockImg.onload = function(){
	imageLoaded++;
}


var player = {
	x : 100,
	y : 250,
	img : playerImg,
	draw : function(){
		ctx.drawImage(this.img,this.x,this.y);
	}
};
var rocks = [];
for(i=0;i<5;i++){
	rocks[i] = {
		x : random(0,200),
		y : random(0,280)-320,
		img : rockImg,
		draw : function(){
			ctx.drawImage(this.img,this.x,this.y);
		}
	};
}

function update(){
	ctx.clearRect(0,0,240,320);
	if(imageLoaded == 2){
		player.draw();
		for(t=0;t<5;t++){
			rocks[t].y+=2;
			rocks[t].draw();
			if(rocks[t].y>280){
				rocks[t].x = random(0,200);
				rocks[t].y = random(0,280)-320;
			}
		}	
	}
	
window.requestAnimationFrame(update);
}
update();