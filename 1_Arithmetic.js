var Arithmetic = /** @class */ (function () {
    function Arithmetic(no1, no2) {
        this.number1 = no1;
        this.number2 = no2;
    }
    Arithmetic.prototype.Addition = function () {
        return (this.number1 + this.number2);
    };
    Arithmetic.prototype.Substraction = function () {
        return (this.number1 - this.number2);
    };
    Arithmetic.prototype.Division = function () {
        var res;
        res = this.number1 / this.number2;
        return res;
    };
    Arithmetic.prototype.Multiplication = function () {
        var ret;
        ret = this.number1 * this.number2;
        return ret;
    };
    return Arithmetic;
}());
var ret = 0;
var obj = new Arithmetic(5, 10);
ret = obj.Addition();
console.log("Addition is : " + ret);
ret = obj.Substraction();
console.log("sub is : " + ret);
ret = obj.Multiplication();
console.log("multiplication is : " + ret);
ret = obj.Division();
console.log("Div is : " + ret);
console.log("New object");
var obj1 = new Arithmetic(10, 5);
ret = obj1.Addition();
console.log("Addition is : " + ret);
ret = obj1.Substraction();
console.log("sub is : " + ret);
ret = obj1.Multiplication();
console.log("multiplication is : " + ret);
ret = obj1.Division();
console.log("Div is : " + ret);
