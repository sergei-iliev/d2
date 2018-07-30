module.exports = function(d2) {
	/*
	 * rectangle is represented by 4 points
	 */
	d2.Rectangle = class Rectangle extends d2.Polygon{
		constructor(p1,width,height) {
			super();
		
			this.points.push(p1.clone());     //topleft point
			this.points.push(new d2.Point(p1.x+width,p1.y));
			this.points.push(new d2.Point(p1.x+width,p1.y+height));
			this.points.push(new d2.Point(p1.x,p1.y+height));
		}
		resize(offX,offY){
	    	let pt=this.points[2];
	    	pt.move(offX,offY);
		}
		paint(g2){
	    	g2.beginPath();
	    	g2.moveTo(this.points[0].x,this.points[0].y);
	    	for (var i = 1; i < this.points.length; i++) {
	    						g2.lineTo(this.points[i].x, this.points[i].y);
	    	}
	    	g2.closePath();  
	    	g2.lineWidth=1;
	    	g2.strokeStyle = "blue";                   
	        g2.stroke();
		}
	}

}