class Bird{
	constructor(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.sprite = new Image();
		this.sprite.src = "images/hung.png";
	}
	update(){
		this.x += 0;
		this.y += 1;
	}
	update1(){
		this.x += 0;
		this.y += 0;
	}
	draw(context){
		context.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
}