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
		resize(offX,offY,point){
			if(point==this.points[2]){
	    	//do same
				let pt=this.points[2];
				pt.move(offX,offY);
	    	//do left 
				let v1=new d2.Vector(this.points[0],pt);
				let v2=new d2.Vector(this.points[0],this.points[1]);
	    	
				let v=v1.projectionOn(v2);
	    	//translate point
				this.points[1].x=this.points[0].x +v.x;
				this.points[1].y=this.points[0].y + v.y;
	    	
	    	//do right 
				v2=new d2.Vector(this.points[0],this.points[3]);
	    	
				v=v1.projectionOn(v2);
	    	//translate point
				this.points[3].x=this.points[0].x +v.x;
				this.points[3].y=this.points[0].y + v.y;
	    	
	    	
			}else if(point==this.points[1]){
		    	//do same
				let pt=this.points[1];
				pt.move(offX,offY);

	    		    	//do left 
				let v1=new d2.Vector(this.points[3],pt);
				let v2=new d2.Vector(this.points[3],this.points[0]);
	    	
				let v=v1.projectionOn(v2);
	    	//translate point
				this.points[0].x=this.points[3].x +v.x;
				this.points[0].y=this.points[3].y + v.y;
	    	//do right 
				v2=new d2.Vector(this.points[3],this.points[2]);
	    	
				v=v1.projectionOn(v2);
	    	//translate point
				this.points[2].x=this.points[3].x +v.x;
				this.points[2].y=this.points[3].y + v.y;				
			}else if(point==this.points[3]){
		    	//do same
				let pt=this.points[3];
				pt.move(offX,offY);		
				
		    	//do left 
				let v1=new d2.Vector(this.points[1],pt);
				let v2=new d2.Vector(this.points[1],this.points[0]);
	    	
				let v=v1.projectionOn(v2);
	    	//translate point
				this.points[0].x=this.points[1].x +v.x;
				this.points[0].y=this.points[1].y + v.y;
				
		    	//do right 
				v2=new d2.Vector(this.points[1],this.points[2]);
	    	
				v=v1.projectionOn(v2);
	    	//translate point
				this.points[2].x=this.points[1].x +v.x;
				this.points[2].y=this.points[1].y + v.y;
			}else{
		    	//do same
				let pt=this.points[0];
				pt.move(offX,offY);		
				
		    	//do left 
				let v1=new d2.Vector(this.points[2],pt);
				let v2=new d2.Vector(this.points[2],this.points[1]);
	    	
				let v=v1.projectionOn(v2);
	    	//translate point
				this.points[1].x=this.points[2].x +v.x;
				this.points[1].y=this.points[2].y + v.y;
				
		    	//do right 
				v2=new d2.Vector(this.points[2],this.points[3]);
	    	
				v=v1.projectionOn(v2);
	    	//translate point
				this.points[3].x=this.points[2].x +v.x;
				this.points[3].y=this.points[2].y + v.y;				
			}
	    	
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