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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,650,150,300, "blue")
createPlatform(445,535,200,75, "blue")
createPlatform(300,445,50,50, "blue")
createPlatform(700,410,190,50, "blue")
createPlatform(375,300,150,50, "blue")
createPlatform(900,300,200,25, "blue")
    // TODO 3 - Create Collectables
createCollectable("steve", 400, 250)
createCollectable("diamond",1200,200)
createCollectable("steve", 540, 500)




    
    // TODO 4 - Create Cannons
 createCannon("top", 200, 500);
createCannon("right", 300, 500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
