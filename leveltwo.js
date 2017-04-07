// Constants
//const GRAVITY = 

var game = {
    canvas : document.createElement("canvas"),
    start : function () {
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(update, 20);
    },
    
    // Clears canvas
    clear : function () {
		this.context.globalAlpha = 1;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		//this.context.drawImage(bgImage, 0, 0, this.canvas.width, this.canvas.height);
    }
}; // End Game object

// Keyboard handler
var kbd = function () {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.p = true;
    this.isAllowed = true; // determine whether kbd input is allowed
};

// add keyevent listener to track arrow key actions
document.addEventListener("keydown", function (e) {
        console.log(kbd.isAllowed);
    if (e.keyCode === 39 || e.keyCode === 68) {
        kbd.right = true;
    }
    else if (kbd.isAllowed && (e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 32)) {
        kbd.isAllowed = false;
        kbd.up = true;
    }
    else if (e.keyCode === 37 || e.keyCode === 65) {
        kbd.left = true;
    }
    else if (e.keyCode === 40 || e.keyCode === 83) {
        kbd.down = true;
    }
    else if (e.keyCode === 80) {
        kbd.p = true;
    }
}, false);

document.addEventListener("keyup", function (e) {
    kbd.isAllowed = true;
    kbd.up = kbd.left = kbd.right = kbd.down = kbd.p = false;
}, false);

game.start(); // canvas not created until this function is called

// Global variables
var player;
var platforms = [];
var doors = [];

var PLAYER_SIZE = 30;

function startGame() {
    // width, height, color, x, y
    player = new Player(PLAYER_SIZE, PLAYER_SIZE, "gray", 100, 10);
    
//    doors = [
//        // width, height, x, y, color
//        new Door (55, 65, 525, 185, "purple"),
//        new Door (50, 65, 525, 185, "red")
//    ]
        
    platforms = [
        // width, height, x, y, color
        //new Platform (400, 300, 200, 200, "brown"),
        new Platform (100, 35, 100, game.canvas.height - 75, "black")
    ]
    
}

var Platform = function(width, height, x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    
    this.draw = function() {
        ctx = game.context;
		ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function Door(width, height, x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    
    this.draw = function() {
        ctx = game.context;
		ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function Player(width, height, color, x, y) {
    this.landed = false;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.gravity = 1;
    
    this.move = function() {
        
        // Check if jump button is pressed
        if (kbd.up && !kbd.isAllowed && this.landed) {
            this.landed = false;
            this.vy += -20;
        }
        
        
        if (!this.landed) {
            this.vy += this.gravity;
        }
        
        // Checking Left/Right movement
        if (kbd.left) {
            this.vx = -5;
        }
        
        else if (kbd.right) {
            this.vx = 5;
        }
        else if (this.landed) {
            this.vx = 0;
        }
        
        this.y += this.vy;
        this.x += this.vx;
        
        this.collisionDetect();
    }
    
    this.collisionDetect = function() {
        
        for (var i = 0; i < platforms.length; i++) {
			var platform = platforms[i];
        }
        
        // Collide with right side
        if (this.x + this.width >= game.canvas.width) {
            this.x = game.canvas.width - this.width;
        }
        
        // Collide with left side
        else if (this.x <= 0) {
            this.x = 0;
        }
        
        // Collide with bottom side
        if (this.y + this.height >= game.canvas.height) {
            this.y = game.canvas.height - this.width;
            this.landed = true;
        }
        
        // Collide with top side
        else if (this.y <= 0) {
            this.y = 0;
        }
        
//        // Collide with top of platform
//        if (this.y + this.height >= platform.y
//           && this.y - platform.height <= platform.y) {
//            
//            if (this.x + this.width >= platform.x
//               && this.x - platform.width <= platform.x) {
//                this.y = platform.y - this.height;
//                this.landed = true;
//            }
//        }
        
        if (this.x >= platform.x - this.width
           && this.x <= platform.x + platform.width) {
            
            if (this.y + this.height >= platform.y
               && this.y - platform.height <= platform.y) {
                this.y = platform.y - this.width;
                this.landed = true;
            }
            
            else {
                this.landed = false;
            }
        }
        
        
    };
    
    // Draw the player to screen
    this.draw = function() {
        ctx = game.context;
		ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
		//ctx.drawImage(this.color, this.x, this.y, this.width, this.height);
    }
}

function update() {
    
    // Clears screen of previous frames
    game.clear();
    
    // Move stuff
	player.move();
    
    // draw images
    player.draw();
    
    for (var i = 0; i < doors.length; i++) {
        doors[i].draw();
    }
    
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }    
    // draw images
    player.draw();
    
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
}
