var d2=require('d2');
document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById("target");
  var g2 = canvas.getContext("2d");
	  
  // do your setup here
  let point=new d2.Point(10,20);	 


  let p2=new d2.Point(320,200);

  
  let rect=new d2.Rectangle(new d2.Point(100,100),80,60);
  let rect1=new d2.Rectangle(new d2.Point(100,100),80,60);
  rect1.rotate(45,{x:100,y:100});
  rect1.rotate(45,{x:100,y:100});

  
  rect.paint(g2);
  rect1.paint(g2);

  
  //arc 
  let p1=new d2.Point(300,300);
  let arc=new d2.Arc(p1,50,45,190); 
  

  arc.paint(g2);
  
  let arc2=new d2.Arc(p1,50,45,190); 
  arc2.rotate(290,{x:200,y:200});
  arc2.paint(g2);
  
  //circle
  //let cir=new d2.Circle(new d2.Point(200,200),50); 
  //cir.paint(g2);
  
  //let cir1=new d2.Circle(new d2.Point(200,200),50); 
  //cir1.rotate(-40,new d2.Point(150,150));
  //cir1.paint(g2);
  
  
  
});
