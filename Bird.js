class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

  this.smokeImage = loadImage("sprites/smoke.png");
  this.trajectory = []; //storing the x and y position for each point the bird moves
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position); // trajectory = [[200,50],[210,70]]

    for(var i=0; i<this.trajectory.length;i++){

      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]); // i++=  i=i+1
                                           // [1][0],               [1][1]

    }
  }
}
