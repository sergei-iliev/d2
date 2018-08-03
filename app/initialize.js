var d2=require('d2');

var shapes=[];

document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById("target");
  canvas.addEventListener('click',onClick);
  var g2 = canvas.getContext("2d");
	  
  // do your setup here
  let point=new d2.Point(10,20);	 


  let p2=new d2.Point(320,200);

  
  let rect=new d2.Rectangle(new d2.Point(300,200),80,60);
  rect.rotate(270,{x:300,y:200});
  //rect.resize(-70,-30,rect.points[0]);
  
  rect.eval(g2);
  rect.paint(g2);
  
  //rect.paint(g2);
  //rect1.paint(g2);

/*  
  //arc 
  let p1=new d2.Point(300,300);
  let arc=new d2.Arc(p1,50,45,190); 
  
  shapes.push(arc);
  arc.paint(g2);
  
  let arc2=new d2.Arc(p1,50,45,190); 
  arc2.rotate(290,{x:200,y:200});
  shapes.push(arc2);
  arc2.paint(g2);
  
  let r1=new d2.RoundRectangle(new d2.Point(56,56),30,40,4);
  shapes.push(r1);
  r1.paint(g2);
  
  let r2=new d2.RoundRectangle(new d2.Point(56,56),30,40,4);
  r2.rotate(34,new d2.Point(56,56));
  shapes.push(r2);
  r2.paint(g2);
  
  //circle
  let cir=new d2.Circle(new d2.Point(200,200),50); 
  shapes.push(cir);
  cir.paint(g2);
  
  //let cir1=new d2.Circle(new d2.Point(200,200),50); 
  //cir1.rotate(-40,new d2.Point(150,150));
  //cir1.paint(g2);
  
  let pol=new d2.Polygon();
  pol.add(new d2.Point(33,33));
  pol.add(new d2.Point(133,33));
  pol.add(new d2.Point(44,200));
  shapes.push(pol);
  pol.move(100,0);
  pol.paint(g2);
  
  let pol1=pol.clone();
  pol1.rotate(5,{x:33,y:33});
  shapes.push(pol1);
  pol1.paint(g2);
  */
  
});

var onClick=function(e){
	var x=e.offsetX;
	var y=e.offsetY;
	var pt=new d2.Point(x,y);
	
	shapes.forEach(shape=>{
		if(shape.contains(pt)){
			console.log(shape);
		}
	});
	
}
