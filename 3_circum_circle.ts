class circle
{
   protected radius;
    pi=3.14;

    constructor(rad:number)
    {
        this.radius=rad;
    }

    Area():number
    {
        var ans;
        ans=this.pi*(this.radius*this.radius);
        return ans;
    }
}

class circleX extends circle
{
    circumstance():number
    {
        return (this.pi*(this.radius+this.radius));
    }
}

var obj=new circleX(10);

console.log("circumstance of circle is : "+obj.circumstance());

var x=obj instanceof circleX;

console.log("obj is instance of circle x class :"+x);