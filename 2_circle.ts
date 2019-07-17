class circle
{
    radius;
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

class value
{

    obj:circle;

    constructor(no)
    {
        this.obj=new circle(no);
        console.log("area of circle is :"+this.obj.Area());
    }

}

var x=new value(5);

new value(10);