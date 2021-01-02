class Box {
  constructor(x,y,width,height) {
    var options = {
       // isStatic: false,
        restitution :0.4,
        friction :0.8
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.color = color(random(0,255),random(0,255),random(0,225)); 
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<2){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }
    else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
    }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -225){
      score++;
    }
  }

};

