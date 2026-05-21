const { Application, Container, Sprite, Assets, Graphics } = PIXI;

(async () => {
  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init({ background: '#42abc5', resizeTo: window });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);


  // Load the bunny texture.
  const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

  // Create a new Sprite from an image path.
  const bunny = new Sprite(texture);
  const cube = new Graphics().rect(50, 50, 100, 100).fill(0xff0000);

  // Add to stage.
  app.stage.addChild(bunny);
  app.stage.addChild(cube)
  // Center the sprite's anchor point.
  bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen.
  bunny.x = 16;
  bunny.y = 16;

  // Add an animation loop callback to the application's ticker.
  app.ticker.add((time) => {
    /**
     * Just for fun, let's rotate mr rabbit a little.
     * Time is a Ticker object which holds time related data.
     * Here we use deltaTime, which is the time elapsed between the frame callbacks
     * to create frame-independent transformation. Keeping the speed consistent.
     */
    bunny.rotation += 0.1 * time.deltaTime;
  });
})();