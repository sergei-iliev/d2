module.exports = function(d2) {
	/*
	 * rectangle is represented by 4 points
	 */
	d2.Rectangle = class Rectangle{
		constructor(p1,width,height) {
			this.points=[];
			this.points.push(p1.clone());     //topleft point
			this.points.push(new d2.Point(p1.x+width,p1.y));
			this.points.push(new d2.Point(p1.x+width,p1.y+height));
			this.points.push(new d2.Point(p1.x,p1.y+height));
		}
		rotate(angle,center = {x:0, y:0}){
		  this.points.forEach(function(point){
			  point.rotate(angle,center);
		  });
		  
		}
		paint(g2){
			g2.strokeStyle  = 'blue';
			g2.lineWidth=1; 
			
			g2.moveTo(this.points[0].x, this.points[0].y);
			g2.lineTo(this.points[1].x, this.points[1].y);
			g2.lineTo(this.points[2].x, this.points[2].y);
			g2.lineTo(this.points[3].x, this.points[3].y);
			g2.lineTo(this.points[0].x, this.points[0].y);
			
			g2.stroke();			
		}
	}
}