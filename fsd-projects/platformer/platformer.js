$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
        createPlatform(0, 375, 75, 15, "purple");
        createPlatform(0, 625, 75, 15, "purple");
        createPlatform(350, 250, 20, 500, "purpe");
        createPlatform(275, 250, 95, 15, "purple");
        createPlatform(350, 375, 75, 15, "purple");
        createPlatform(275, 500, 75, 15, "purple");
        createPlatform(350, 600, 75, 15, "purple");
        createPlatform(700, 0, 15, 500, "purple");
        createPlatform(625, 500, 75, 15, "purple");
        createPlatform(1050, 375, 15, 375, "purple");
        createPlatform(1050, 375, 75, 15, "purple");
        createPlatform(975, 600, 90, 15, "purple");
        createPlatform(1350, 600, 100, 15, "purple");
        createPlatform(700, 300, 85, 15 , "purple");
        createPlatform(800, 500, 100, 15, "purple");
        createPlatform(1200, 500, 50, 15, "purple");



    // TODO 3 - Create Collectables
        createCollectable("ring", 310, 200);
        createCollectable("ring", 750, 250);
        createCollectable("ring", 1350, 500);
        createCollectable("ring", 210, 700);
        



    
    // TODO 4 - Create Cannons
        createCannon("left", 500, 2500);
        createCannon("top", 310, 2500);
        createCannon("bottom", 700, 2500);
        createCannon("botton", 700, 2500);
        createCannon("right", 350, 2500);
        
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
