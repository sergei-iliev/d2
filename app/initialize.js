var d2=require('d2');
document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  let point=new d2.Point(10,20);	 
  console.log(point);

  let p1=new d2.Point(200,200);
  let p2=new d2.Point(320,200);

  
  let rect=new d2.Rectangle(new d2.Point(100,100),80,60);
  let rect1=new d2.Rectangle(new d2.Point(100,100),80,60);
  rect1.rotate(300,{x:100,y:100});

  //arc 
  let arc=new d2.Arc(p1,50,145,190); 
  var canvas = document.getElementById("target");
  var g2 = canvas.getContext("2d");
  

  arc.paint(g2);

  rect.paint(g2);
  rect1.paint(g2);
});
