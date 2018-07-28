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
	}
}