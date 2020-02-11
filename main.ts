import { Point } from './point';

let point = new Point(1, 5);
let x = point.getX();
point.setX(10);
point.draw();

// cohesion - things that are related should go together
// module - each file is a module