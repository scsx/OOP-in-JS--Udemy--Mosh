
// Factory function
function createCircle(radius) {
    return {
        //radius: radius,
        // é o mesmo que:
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(2);
circle.draw();
console.log(circle);