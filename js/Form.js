class Form {

  constructor() {
    this.input = createInput('');
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var wei=displayWidth,hei=displayHeight
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0);

    this.input.position(wei/2, hei/2);
    this.button.position((wei/2)+250,( hei/2));

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(wei/2, (hei/2)-20);
    });

  }
}
