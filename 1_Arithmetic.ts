class Arithmetic
{
    number1;
    number2;

    constructor(no1,no2)
    {
        this.number1=no1;
        this.number2=no2;
    }

    Addition():number
    {
        return (this.number1+this.number2);
    }

    Substraction():number
    {
        return (this.number1-this.number2);
    }

    Division():number
    {
        var res:number;
        res=this.number1/this.number2;
        return res;
    }

    Multiplication():number
    {
        var ret;
        ret=this.number1*this.number2;
        return ret;
    }
}
var ret=0;
var obj=new Arithmetic(5,10);
ret=obj.Addition();
console.log("Addition is : "+ret);

ret=obj.Substraction();
console.log("sub is : "+ret);

ret=obj.Multiplication();
console.log("multiplication is : "+ret);

ret=obj.Division();
console.log("Div is : "+ret);
console.log("New object");
var obj1=new Arithmetic(10,5);
ret=obj1.Addition();
console.log("Addition is : "+ret);

ret=obj1.Substraction();
console.log("sub is : "+ret);

ret=obj1.Multiplication();
console.log("multiplication is : "+ret);

ret=obj1.Division();
console.log("Div is : "+ret);