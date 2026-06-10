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
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 610, 210, 10, "black");
createPlatform(310, 480, 10, 140, "black");
createPlatform(310, 480, 140, 10, "black");
createPlatform(550, 480, 170, 10, "black");
createPlatform(800, 380, 170, 10, "black");
createPlatform(460, 310, 150, 10, "black");
createPlatform(700, 180, 160, 10, "black");
createPlatform(980, 230, 160, 10, "black");
createPlatform(1300, 550, 40, 5, "black");



    // TODO 3 - Create Collectables
createCollectable("steve", 1300, 520);
createCollectable("diamond", 360, 450);
createCollectable("max", 720, 100);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 100);
createCannon("right", 760, 0);
createCannon("bottom", 620, 1100 )    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
