var circle = /** @class */ (function () {
    function circle(rad) {
        this.pi = 3.14;
        this.radius = rad;
    }
    circle.prototype.Area = function () {
        var ans;
        ans = this.pi * (this.radius * this.radius);
        return ans;
    };
    return circle;
}());
var value = /** @class */ (function () {
    function value(no) {
        this.obj = new circle(no);
        console.log("area of circle is :" + this.obj.Area());
    }
    return value;
}());
var x = new value(5);
new value(10);
