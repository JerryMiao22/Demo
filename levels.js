// Levels is an array of objects, each of which contains a player 
// object, a doors array, and a platforms array.
// Access the first level with LEVELS[0], and so on
const LEVELS = [
    
    // Level #0
    {
        // width, height, color, x, y
        player : new Player(PLAYER_SIZE, PLAYER_SIZE, "gray", 10, 100), 
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 525, 480 - 250 - 65, doorImg)
            //new Door (50, 65, 525, 185, "red")
        ],
        platforms : [
            // width, height, x, y, img
            new Platform (640, 250, 0, 480 - 250, L0Floor)
        ]
    },

    // Level #1
    {
        // width, height, color, x, y
        player : new Player(PLAYER_SIZE, PLAYER_SIZE, "gray", 80, 350), 
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 525, 60, doorImg),
            new Door (55, 65, 20, 15, doorImg)
        ],
        platforms : [
            // width, height, x, y, color
            
            // Floor
            new Platform (640, 50, 0, 480 - 50, L1Floor),
            // Entrance Door
            new Platform (55, 65, 20, 480 - 115, entranceImg),
            // Platform 1
            new Platform (100, 30, 475, 350, L1P1),
            // Platform 2
            new Platform (110, 30, 300, 280, L1P1),
            // Platform 3
            new Platform (150, 30, 60, 250, L1P1),
            // Platform for Second Door
            new Platform (140, 30, 0, 80, L1P1),
            // Platform 4
            new Platform (120, 30, 270, 150, L1P1),
            // Platform 5
            new Platform (200, 30, 640 - 200, 125, L1P1)
        ]
    },
    
    // Level #2
    {
        // width, height, color, x, y
        player : new Player(PLAYER_SIZE, PLAYER_SIZE, "gray", 100, 10),
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 550, 480 - 120 - 65, doorImg)
        ],
        platforms : [
            // width, height, x, y, color
            //new Platform (400, 300, 200, 200, "brown"),
            new Platform (640 / 3, 120, 0, 480 - 120, testImg),
            new Platform (640 / 6, 200, 640 / 3, 480 - 200, testImg),
            new Platform (640 / 6, 280, 640 / 3 + 640 / 6, 480 - 280, testImg),
            new Platform (640 / 3, 120, 640 - 640 / 3, 480 - 120, testImg)
        ]
    },
    
    // Level #3
    {
        // width, height, color, x, y
        player : new Player(PLAYER_SIZE, PLAYER_SIZE, "gray", 50, 310),
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 550, 480 - 120 - 65, doorImg)
        ],
        platforms : [
            // width, height, x, y, color
            //new Platform (400, 300, 200, 200, "brown"),
            new Platform (640 / 4, 120, 0, 480 - 120, testImg),
            new Platform (640 / 2, 435, 640 / 4, 480 - 435, testImg),
            new Platform (30, 40, 640 / 4 - 30, 480 - 225, "red"),
            new Platform (30, 40, 0, 480 - 330, "red"),
            new Platform (30, 40, 640 / 4 - 30, 480 - 435, "red"),
            new Platform (640 / 4, 120, 640 - 640 / 4, 480 - 120, testImg)
        ]
    },
    
    // Level #4
    {
        // width, height, color, x, y
        player : new Player(PLAYER_SIZE, PLAYER_SIZE, "gray", 50, 310),
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 550, 480 - 120 - 65, doorImg)
        ],
        platforms : [
            // width, height, x, y, color
            //new Platform (400, 300, 200, 200, "brown"),
            new Platform (640 / 4, 120, 0, 480 - 120, testImg),
            new Platform (640 / 2, 435, 640 / 4, 480 - 435, testImg),
            new Platform (30, 40, 640 / 4 - 30, 480 - 225, "red"),
            new Platform (30, 40, 0, 480 - 330, "red"),
            new Platform (30, 40, 640 / 4 - 30, 480 - 435, "red"),
            new Platform (640 / 4, 120, 640 - 640 / 4, 480 - 120, testImg)
        ]
    }
];
