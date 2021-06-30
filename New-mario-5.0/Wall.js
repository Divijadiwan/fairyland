class Wall {
    constructor(posX) {
      this.rw = random(100, 300);
      this.rx = posX; //setting the x posing where wall will be created  
      this.ry = height-random([350,250]);   //setting y position where wall will be created 
      this.spt=createSprite(this.rx, this.ry,this.rw); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",wallAnimation);
      this.spt.scale=0.3;
    
    }
  
  
}
  


