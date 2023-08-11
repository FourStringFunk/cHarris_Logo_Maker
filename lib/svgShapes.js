// define shape class and constructor
class Shape {
    constructor() {
        this.color = color;
    }

    defineColor(color) {
        this.color = color;
    }
}

// define shape extensions based on shape type. Should inherit properties defined in the shape class and constructor
class Circle extends Shape {
    constructor (color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="150" r="50" fill="${this.color} />`;
    }
}

// export classes to be used in index.js
module.exports = {
    Circle
};