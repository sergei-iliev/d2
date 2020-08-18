var d2=require('d2');

var shapes=[];
var g2;
var t2;

document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById("target");
  canvas.addEventListener('click',onClick);
  g2 = canvas.getContext("2d");
  g2.strokeStyle  = 'black';
  g2.lineWidth=2;
  
	

  //1.rectangle
  let r1=new d2.Rectangle(new d2.Point(100,300),140,80);
  r1.rotate(10);
  r1.paint(g2);
  
  
  
  let r11=r1.clone();
  r11.grow(50,g2);
  r11.paint(g2);
  
  let r2=new d2.Rectangle(new d2.Point(100,300),140,80);
  r2.setSize(150,350);
  r2.rotate(20);
  //r2.resize(20,20,r2.points[2]);  
  //r2.scale(1.2);  
  r2.paint(g2);
  
  //2.Round rect 
  let rr1=new d2.RoundRectangle(new d2.Point(300,300),140,80,12);
  //shapes.push(rr1);
  rr1.paint(g2);
 
  //let rr2=new d2.RoundRectangle(new d2.Point(300,300),140,80,12);
  let rr2=rr1.clone();
  rr2.rotate(60,{x:300,y:300});
  rr2.setRounding(20);
  //rr2.resize(20,20,rr2.points[2]);
  //shapes.push(rr2);
  
  
  rr2.scale(1.5);
  rr2.paint(g2);
  
  
  //3.Oval
  let o1=new d2.Oval(new d2.Point(500,300),140,80);
  o1.paint(g2);
  
  let o2=new d2.Oval(new d2.Point(500,300),140,80);
  o2.rotate(70,{x:500,y:300});
  o2.resize(20,20,o2.points[2]);
  o2.scale(1.2);
  o2.paint(g2);
  
  //4.Arc   
  let a1=new d2.Arc(new d2.Point(740,340),80,20,-250);   
  shapes.push(a1);
  a1.paint(g2);
  
  let a2=a1.clone();
  a2.startAngle=70;
  a2.endAngle=70;
  shapes.push(a2);
  a2.rotate(80,{x:660,y:300});    
  a2.paint(g2);
  
  //5.Hexagon  
  let h1=new d2.Hexagon(new d2.Point(900,340),100);
  h1.paint(g2);
  
  let h2=new d2.Hexagon(new d2.Point(900,340),100);
  h2.rotate(40,{x:860,y:300});  
  h2.scale(1.2);
  h2.paint(g2);
  
  //6.Segment
  let s1=new d2.Segment(new d2.Point(1100,340),new d2.Point(1200,340));
  s1.paint(g2);

  let s2=new d2.Segment(new d2.Point(1100,340),new d2.Point(1200,340));
  s2.rotate(40,{x:1000,y:340});
  s2.paint(g2);
  
  
  //7.Obround
  let ob1=new d2.Obround(new d2.Point(1300,340),200,100);
  shapes.push(ob1);
  ob1.rotate(45);
  ob1.paint(g2);
  
  ob1.grow(25);
  ob1.paint(g2);
  
  g2.lineWidth =1;
  
  
  //9.Polyline
  let polyline=new d2.Polyline();
  polyline.add(30,10);
  polyline.add(30,50);
  polyline.add(80,150);
  polyline.add(120,150);
  //polyline.paint(g2);
  
  let polyline2=polyline.clone();
  polyline2.rotate(40);
  polyline2.paint(g2);
  
  polyline.remove(80,150);
  polyline.paint(g2);
  
  let p=new d2.Oval(new d2.Point(150,600),140,90);   
  p.rotate(220,new d2.Point(150,600));
  p.paint(g2);
  
  let verLine=new d2.Line(new d2.Point(320,550),new d2.Point(420,550));
  verLine.paint(g2);
  
  p.mirror(verLine);
  p.paint(g2);
  
  
  //8.Text
  let t1=new d2.FontText(new d2.Point(1400,540),'Senior Amichi',20);
//  shapes.push(t1);
//  t1.paint(g2);
  
  t2=t1.clone();
  shapes.push(t2);
  t2.setText('Senior Amichi');
  t2.setSize(20);  
  //t2.move(50,0);  
  t2.rotate(300,new d2.Point(1400,540));
  t2.paint(g2);
//  let prj=verLine.projectionPoint(pt1);
//  prj.paint(g2);
  
  //9. Basic Text
   let bt=new d2.BaseFontText(400,150,'MgMQjFp',0,130);
   bt.paint(g2);
   
   
   let e2 =new d2.Arcellipse(new d2.Point(420,550),50,150);
   //e2.rotate(20);
   shapes.push(e2);
   e2.paint(g2);
   
});

var onClick=function(e){
	var x=e.offsetX;
	var y=e.offsetY;
	var pt=new d2.Point(x,y);
	
	shapes.forEach(shape=>{
		if(shape.contains(pt,g2)){
			console.log(shape);
		}
	});
	
}
