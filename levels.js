// Levels is an array of objects, each of which contains a player 
// object, a doors array, and a platforms array.
// Access the first level with LEVELS[0], and so on
const LEVELS = [
    
    // Level #0
    {
        // width, height, color, x, y
        playerX : 10,
        playerY : 100,
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 525, 480 - 250 - 65, doorImg)
        ],
        platforms : [
            // width, height, x, y, img
            new Platform (640, 250, 0, 480 - 250, L0Floor)
        ],
		spikes : [
			new Spike (0, 0, 320, 240, testImg)
		]
    },
    
    // Level #1
    {
        // width, height, color, x, y
        playerX : 75,
        playerY : 170,
        doors : [
            // width, height, x, y, color
            new Door (60, 70, 565, 160, doorImg)
        ],
        platforms : [
            // width, height, x, y, img
            new Platform (60, 70, 10, 160, entranceImg),
            new Platform (640, 250, 0, 480 - 250, Transparent)
        ],
		spikes : [
			new Spike (85, 15, 255, 215, Transparent)
		]
    },

    // Level #2
    {
        // width, height, color, x, y
        playerX : 80,
        playerY : 350,
        doors : [
            // width, height, x, y, color
            new Door (55, 65, 525, 60, doorImg),
            new Door (55, 65, 20, 15, doorImg)
        ],
        platforms : [
            // width, height, x, y, color
            
            // Floor
            new Platform (640, 50, 0, 480 - 50, L2Floor),
            // Entrance Door
            new Platform (55, 65, 20, 480 - 115, entranceImg),
            // Platform 1
            new Platform (100, 30, 475, 350, L2P1),
            // Platform 2
            new Platform (110, 30, 300, 280, L2P1),
            // Platform 3
            new Platform (150, 30, 60, 250, L2P1),
            // Platform for Second Door
            new Platform (140, 30, 0, 80, L2P1),
            // Platform 4
            new Platform (120, 30, 270, 150, L2P1),
            // Platform 5
            new Platform (200, 30, 640 - 200, 125, L2P1)
        ],
		spikes : [
			//new Spike (0, 0, 320, 240, testImg)
		]
    },
    
    // Level #10 (3)
    {
        // width, height, color, x, y
        playerX : 70,
        playerY : 10,
        doors : [
            // width, height, x, y, color
            //new Door (55, 65, 575, 385, doorImg)
            new Door (55, 65, 470, 100, Transparent)
        ],
        platforms : [
            // width, height, x, y, color
            
            // Starting platform
            new Platform (100, 25, 0, 50, Transparent),
            new Platform (100, 25, 100, 50, Transparent),
            new Platform (100, 25, 200, 50, Transparent),
            new Platform (100, 25, 300, 50, Transparent),
            new Platform (100, 25, 400, 50, Transparent),
            new Platform (50, 25, 500, 50, Transparent),
            
            new Platform (25, 100, 525, 75, Transparent),
            new Platform (25, 100, 525, 175, Transparent),
            new Platform (25, 100, 525, 275, Transparent),
            new Platform (25, 25, 525, 375, Transparent),
            
            new Platform (100, 25, 425, 375, Transparent),
            new Platform (100, 25, 325, 375, Transparent),
            new Platform (100, 25, 225, 375, Transparent),
            new Platform (100, 25, 125, 375, Transparent),
            
            new Platform (100, 25, 325, 270, Transparent),
            new Platform (100, 25, 225, 270, Transparent),
            new Platform (100, 25, 125, 270, Transparent),
            new Platform (100, 25, 25, 270, Transparent),
            new Platform (25, 25, 0, 270, Transparent),
            
            new Platform (100, 25, 325, 165, Transparent),
            new Platform (100, 25, 225, 165, Transparent),
            new Platform (100, 25, 125, 165, Transparent),
            new Platform (100, 25, 425, 165, Transparent),
        ],
		spikes : [
            // width, height, x, y, img
            new Spike (30, 480, 610, 0, Transparent),
            new Spike (350, 25, 125, 400, Transparent),
            new Spike (30, 185, 0, 295, Transparent),
            new Spike (375, 25, 30, 295, Transparent),
            new Spike (30, 185, 495, 190, Transparent),
            new Spike (345, 25, 150, 190, Transparent),
            new Spike (30, 195, 0, 75, Transparent),
            new Spike (395, 25, 30, 75, Transparent),
		]
        
    },

{ 
    // level #4 
 
     // width, height, x, y
      playerX : 70,
      playerY : 360,
      doors : [ // width, height, x, y, color
        new Door (55, 65, 590, 25, doorImg),
        new Door (55, 65, 0, 20, doorImg)
      ],
    platforms : [
        // width, height, x, y, img
        new Platform (640, 250, 0, 480-120 , Transparent), 
        // Platform 1
        new Platform (500, 30, 550, 90, L2P1),
        // Platform 2
        new Platform (30, 30, 300, 280, L2P1),
        // Platform 3
        new Platform (80, 30, 0, 80, L2P1),
        // Platform 4
        new Platform (30, 30, 250, 200, L2P1),
        // Platform 5
        new Platform (30, 30, 150, 100, L2P1),
        // Platform 6
        new Platform (30, 30, 150, 300, L2P1),
        // Platform 7
        new Platform (30, 30, 200, 500, L2P1),
        // Platform 8
        new Platform (30, 30, 310, 20, L2P1),
        // Platform 9
        new Platform (30, 30, 420, 210, L2P1),
        // Platform 10
        new Platform (30, 30, 300, 150, L2P1),
        // Platform 11
        new Platform (30, 30, 350, 230, L2P1),
        // Platform 12
        new Platform (30, 30, 450, 125, L2P1),
        // Platform 13
        new Platform (30, 30, 500, 250, L2P1),
        // Platform 14
        new Platform (30, 30, 100, 200, L2P1),
        
        


    ],

    spikes : [
       
    ],

    



 },

 // Level #6- THE END (so far)
 {
    // width, height, color, x, y
    playerX : 70,
    playerY : 700,
    doors : [
        // width, height, x, y, color
        new Door (0, 0, 700, 700, doorImg)
    ],
    platforms : [
        // width, height, x, y, img
        new Platform (0, 0, 700, 700, testImg),
         // Platform 1
        new Platform (20, 100, 100, 200, L2P1),
         // Platform 2
         new Platform (100, 20, 60, 200, L2P1),
         // Platform 3
        new Platform (20, 100, 170, 200, L2P1),
         // Platform 4
         new Platform (50, 20, 190, 230, L2P1),
        // Platform 5
        new Platform (20, 100, 225, 200, L2P1),
        // Platform 6
        new Platform (20, 100, 260, 200, L2P1),
         // Platform 7
         new Platform (50, 20, 270, 200, L2P1),
         // Platform 8
         new Platform (50, 20, 270, 245, L2P1),
          // Platform 9
          new Platform (50, 20, 270, 280, L2P1),
           // Platform 10
        new Platform (20, 100, 380, 200, L2P1),
          // Platform 11
         new Platform (50, 20, 400, 200, L2P1),
         // Platform 12
         new Platform (50, 20, 400, 245, L2P1),
          // Platform 13
          new Platform (50, 20, 400, 280, L2P1),
           // Platform 14
        new Platform (20, 100, 470, 200, L2P1),
         // Platform 15
         new Platform (30, 30, 470, 200, L2P1),
          // Platform 16
        new Platform (30, 30, 490, 227, L2P1),
         // Platform 17
         new Platform (30, 30, 500, 240, L2P1),
          // Platform 18
          new Platform (30, 30, 565, 210, L2P1),
          // Platform 19
          new Platform (30, 30, 580, 235, L2P1),
           // Platform 18
           new Platform (30, 30, 565, 260, L2P1),


        // Platform 20
         new Platform (20, 100, 525, 200, L2P1),
          // Platform 21
          new Platform (20, 100, 550, 200, L2P1),


        
    ],
    spikes : [
        new Spike (0, 0, 320, 240, testImg)
    ]

    },
];
