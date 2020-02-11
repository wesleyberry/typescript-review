export class Point {
    constructor(private x?: number, private y?: number) {
        
    }

    draw() {
        console.log(`X: ${this.x}`);
        console.log(`Y: ${this.y}`);
    }

    getX() {
        return this.x;
    }

    setX(value) {
        if(value < 0) throw new Error('Value cannot be less than 0');
        this.x = value;
    }
}