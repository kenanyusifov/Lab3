var x,t,y,w,z;

x=promp("enter x");
document.write("x="+x);

t=promp("enter t");
document.write("t="+t);

z=promp("enter z");
document.write("z="+z);

y=(2*Math.cos(x-Math.PI/6))/(1/2+Math.pow(Math.sin(t),2));
w=y+((Math.pow(z,2))/(3+((Math.pow(z,2)/5))));

console.log("y="+y);
console.log("w="+w);