module.exports = function(d2) {
	d2.Polyline = class{
	   constructor(){
		 this.points = [];
		   
	   }
	   
	   add(x,y){
		 this.points.push(new d2.Point(x,y));  
	   }
	   
	   paint(g2){			
		  g2.moveTo(this.points[0].x, this.points[0].y);
		  
		  g2.lineTo(this.p2.x, this.p2.y);
			
		  g2.stroke();
	   }
	   
	}
	
}