class paper {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.x=x
      this.y=y
      this.radius=radius
      this.body = Bodies.circle(x, y, (this.radius-40)/2, options);
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      push();
      rectMode(CENTER);
      translate(paperpos.x, paperpos.y);
      imageMode(CENTER);
			image(this.image,0, 0, this.radius,this.radius)
      pop();
    }
  };
  