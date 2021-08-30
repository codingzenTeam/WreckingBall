var engine = Matter.Engine.create({ enableSleeping: true });
var render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: 600,
    width: 700,
    wireframes: false
  }
});
var rec1 = Matter.Bodies.rectangle(160, 160, 100, 50, { isStatic: true });
var rec2 = Matter.Bodies.rectangle(700, 300, 50, 900, { isStatic: true });
var rec3 = Matter.Bodies.rectangle(300, 0, 900, 50, { isStatic: true });
var rec4 = Matter.Bodies.rectangle(300, 600, 900, 50, { isStatic: true });
var stack = Matter.Composites.stack(400, 200, 12, 20, 0, 0, function(x, y) {
  return Matter.Bodies.rectangle(x, y, 20, 20);
});
var ball = Matter.Bodies.circle(160, 160, 50, {
  isStatic: false,
  frictionAir: 0.005,
  density: 0.00000001,
  restitution: 1
});
var constraint = Matter.Constraint.create({
  bodyA: rec1,
  bodyB: ball,
length: 200
});
Matter.World.add(engine.world, [
  rec1,
  ball,
  constraint,
  rec2,
  rec3,
  rec4,
  stack
]);
Matter.Engine.run(engine);
Matter.Render.run(render);
document.addEventListener("keydown", function(key) {
  console.log(key);
  if (key.keyCode == 39) {
    Matter.Body.setPosition(rec1, {
      x: rec1.position.x + 10,
      y: rec1.position.y
    });
  }
  if (key.keyCode == 37) {
    Matter.Body.setPosition(rec1, {
      x: rec1.position.x - 10,
      y: rec1.position.y
    });
    console.log("left arrow pressed");
  }
});
