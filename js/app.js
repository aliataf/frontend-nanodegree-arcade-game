// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1: {this.y = 50; break;}
        case 2: {this.y = 140; break;}
        case 3: {this.y = 220; break;}
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += Math.random() * 100 * dt;
    if (this.x > 505)
        this.x = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(sprite) {
        this.sprite = sprite;
        this.x = 200; // Initial X position
        this.y = 387; // Initial Y position
        this.posX = 3; // Used to prevent horizontal overflow
        this.posY = 1; // Used to prevent vertical overflow
    }

    update() {
        return;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyCode) {
        switch(keyCode) {
            case 'left': {
                if (this.posX > 1) {
                    this.x -= 100; // Move left
                    this.posX--;
                }
                break;
            }
            case 'up': {
                if (this.posY < 6) {
                    this.y -= 84; // Move up
                    this.posY++;
                }
                break;
            }
            case 'right': {
                if (this.posX < 5) {
                    this.x += 100; // Move right
                    this.posX++;
                }
                break;
            }
            case 'down': {
                if (this.posY > 1) {
                    this.y += 84; // Move down
                    this.posY--;
                }
                break;
            }
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy(), new Enemy(), new Enemy()];
let player = new Player('images/char-boy.png');

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
