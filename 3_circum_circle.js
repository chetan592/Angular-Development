var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var circleX = /** @class */ (function (_super) {
    __extends(circleX, _super);
    function circleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circleX.prototype.circumstance = function () {
        return (this.pi * (this.radius + this.radius));
    };
    return circleX;
}(circle));
var obj = new circleX(10);
console.log("circumstance of circle is : " + obj.circumstance());
var x = obj instanceof circleX;
console.log("obj is instance of circle x class :" + x);
