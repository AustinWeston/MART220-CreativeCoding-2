    var ninja;
    var animation = [];
    var runanimation = [];
    var attackanimation = [];
    var ninjaObjects = [];
    var ninjaRunObjects = [];
    var ninjaAttackObjects = [];
    var i = 0;
    var j = 0;
    var x = 0;
    var counter = 0;
    
    function preload() {
    
        // CHALLENGE - can you make it so we don't have to copy and paste all this?

        // ANSWER - I could not figure out how to do so, but I would like to learn.    
        ninja = new imageclass('assets/Idle__000.png', 0, 0);
        ninjaObjects[0] = ninja;
        ninja = new imageclass('assets/Idle__001.png', 0, 0);
        ninjaObjects[1] = ninja;
        ninja = new imageclass('assets/Idle__002.png', 0, 0);
        ninjaObjects[2] = ninja;
        ninja = new imageclass('assets/Idle__003.png', 0, 0);
        ninjaObjects[3] = ninja;
        ninja = new imageclass('assets/Idle__004.png', 0, 0);
        ninjaObjects[4] = ninja;
        ninja = new imageclass('assets/Idle__005.png', 0, 0);
        ninjaObjects[5] = ninja;
        ninja = new imageclass('assets/Idle__006.png', 0, 0);
        ninjaObjects[6] = ninja;
        ninja = new imageclass('assets/Idle__007.png', 0, 0);
        ninjaObjects[7] = ninja;
        ninja = new imageclass('assets/Idle__008.png', 0, 0);
        ninjaObjects[8] = ninja;
        ninja = new imageclass('assets/Idle__009.png', 0, 0);
        ninjaObjects[9] = ninja;
    
        
        ninja = new imageclass('assets/Run__000.png', 0, 0);
        ninjaRunObjects[0] = ninja;
        ninja = new imageclass('assets/Run__001.png', 0, 0);
        ninjaRunObjects[1] = ninja;
        ninja = new imageclass('assets/Run__002.png', 0, 0);
        ninjaRunObjects[2] = ninja;
        ninja = new imageclass('assets/Run__003.png', 0, 0);
        ninjaRunObjects[3] = ninja;
        ninja = new imageclass('assets/Run__004.png', 0, 0);
        ninjaRunObjects[4] = ninja;
        ninja = new imageclass('assets/Run__005.png', 0, 0);
        ninjaRunObjects[5] = ninja;
        ninja = new imageclass('assets/Run__006.png', 0, 0);
        ninjaRunObjects[6] = ninja;
        ninja = new imageclass('assets/Run__007.png', 0, 0);
        ninjaRunObjects[7] = ninja;
        ninja = new imageclass('assets/Run__008.png', 0, 0);
        ninjaRunObjects[8] = ninja;
        ninja = new imageclass('assets/Run__009.png', 0, 0);
        ninjaRunObjects[9] = ninja;

        ninja = new imageclass('assets/Attack__000.png', 0, 0);
        ninjaAttackObjects[0] = ninja;
        ninja = new imageclass('assets/Attack__001.png', 0, 0);
        ninjaAttackObjects[1] = ninja;
        ninja = new imageclass('assets/Attack__002.png', 0, 0);
        ninjaAttackObjects[2] = ninja;
        ninja = new imageclass('assets/Attack__003.png', 0, 0);
        ninjaAttackObjects[3] = ninja;
        ninja = new imageclass('assets/Attack__004.png', 0, 0);
        ninjaAttackObjects[4] = ninja;
        ninja = new imageclass('assets/Attack__005.png', 0, 0);
        ninjaAttackObjects[5] = ninja;
        ninja = new imageclass('assets/Attack__006.png', 0, 0);
        ninjaAttackObjects[6] = ninja;
        ninja = new imageclass('assets/Attack__007.png', 0, 0);
        ninjaAttackObjects[7] = ninja;
        ninja = new imageclass('assets/Attack__008.png', 0, 0);
        ninjaAttackObjects[8] = ninja;
        ninja = new imageclass('assets/Attack__009.png', 0, 0);
        ninjaAttackObjects[9] = ninja;
    
        for (var i = 0; i < ninjaObjects.length; i++) 
        {
            animation[i] = ninjaObjects[i].getImage();   
        }
    
        for (var i = 0; i < ninjaRunObjects.length; i++)
        {
            runanimation[i] = ninjaRunObjects[i].getImage();
        } 

        for (var i = 0; i < ninjaAttackObjects.length; i++)
        {
            attackanimation[i] = ninjaAttackObjects[i].getImage();
        } 
    }
    
    
    function setup() {
    
        createCanvas(800, 800);
        setInterval(incrementIndex, 75);
    }
    
    
    function draw() {
    
        background(100, 30, 225);

    
        
        if(keyIsPressed)
        {
            if(key == "d")
            {
                // This keeps the image displayed
                image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
                ninjaRunObjects[j].moveRight();
                // this section slows the running down
                counter++;
                if(counter > 5)
                {
                    // increment the index "j"
                    incrementRunIndex();
                    // restart our counter
                    counter = 0;
                }   
            }

            if (key == "a")
            {
                image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
                ninjaRunObjects[j].moveLeft();
                counter++;
                if(counter > 5)
                {
                    incrementRunIndex();
                    counter = 0;
                } 

            }

            if(key == "w")
            {
                
                image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
                
                ninjaRunObjects[j].moveUp();
                counter++;
                if(counter > 5)
                {
                    incrementRunIndex();
                    counter = 0;
                }   
            }

            if (key == "s")
            {
                image(runanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
                ninjaRunObjects[j].moveDown();
                counter++;
                if(counter > 5)
                { 
                    incrementRunIndex();
                    counter = 0;
                } 

            }

            if (key == "x")
            {
                image(attackanimation[j], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
                counter++;
                if(counter > 5)
                { 
                    incrementRunIndex();
                    counter = 0;
                } 

            }
        }
        else
        {
            image(animation[i], ninjaRunObjects[j].getX(), ninjaRunObjects[j].getY());
        }
        
    
    }

    /* Ok, I managed to make the sprite move by adding more class functions, 
    but I assume there's a better way to do it.
    I tried "this.x = this.x++" and it worked, but it was very jittery as it moved.
    Then I changed it to just "this.x++" and its much smoother, but a lot slower.

    Is there a way to reverse the images in the canvas? Or is it better to just make actual reverse images?
    Also, is there a way I can shrink the size of my sprite so it isn't so massive?  */
    
    function incrementIndex()
    {
         
         i += 1;
    
         if (i >= animation.length) 
         {
             i = 0;
         }
    }
    
    function incrementRunIndex()
    {
         
         j += 1;
    
         if (j >= runanimation.length) 
         {
             j = 0;
         }
    }
