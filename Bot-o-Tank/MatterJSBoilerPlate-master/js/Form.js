class Form{
    constructor(){
        this.input = createInput("Enter Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.reset = createButton('Reset');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Bot-O-Tank");
        title.position(displayWidth/2, 0);

        this.input.position(displayWidth/2, displayHeight/2);

        this.button.position(displayWidth/2, displayHeight/2 + 50);
        this.reset.position(displayWidth-100, 20);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome to Bot-O-Tank " + player.name);
            this.greeting.position(displayWidth/2, displayHeight/2);
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });
    }
}