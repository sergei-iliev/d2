module.exports = function(d2) {

    d2.RoundRectangle = class RoundRectangle {
    	constructor(p1,width,height,rounding) {
			this.segments=[];
            this.arcs=[];
			this.init(p1,width,height,rounding);
    		
    	}
    	init(p1,width,height,rounding){
			if(rounding==0){
				this.segments.push(new d2.Segment(p1.clone(),new d2.Point(p1.x+width,p1.y)));     //topleft point
				this.segments.push(new d2.Segment(new d2.Point(p1.x+width,p1.y),new d2.Point(p1.x+width,p1.y+height)));
				this.segments.push(new d2.Segment(new d2.Point(p1.x+width,p1.y+height),new d2.Point(p1.x,p1.y+height)));
				this.segments.push(new d2.Segment(new d2.Point(p1.x,p1.y+height),p1.clone()));
			}else{
				this.segments.push(new d2.Segment(new d2.Point(p1.x+rounding,p1.y),new d2.Point(p1.x+width-rounding,p1.y)));     //topleft point
				this.segments.push(new d2.Segment(new d2.Point(p1.x+width,p1.y+rounding),new d2.Point(p1.x+width,p1.y+height-rounding)));
				this.segments.push(new d2.Segment(new d2.Point(p1.x+width-rounding,p1.y+height),new d2.Point(p1.x+rounding,p1.y+height)));
				this.segments.push(new d2.Segment(new d2.Point(p1.x,p1.y+height-rounding),new d2.Point(p1.x,p1.y+rounding)));
				
				this.arcs.push(new d2.Arc(new d2.Point(p1.x+rounding,p1.y+rounding),rounding,90,90));
				this.arcs.push(new d2.Arc(new d2.Point(p1.x-rounding+width,p1.y+rounding),rounding,90,-90));
				
				this.arcs.push(new d2.Arc(new d2.Point(p1.x-rounding+width,p1.y-rounding+height),rounding,0,-90));
				this.arcs.push(new d2.Arc(new d2.Point(p1.x+rounding,p1.y+height-rounding),rounding,180,90));
			}	
    	}
        contains(pt){
      	   return false;    	   
         }
    	rotate(angle,center = {x:0, y:0}){
			this.segments.forEach(segment=>{
				segment.rotate(angle,center);
			});
			
			this.arcs.forEach(arc=>{
				arc.rotate(angle,center);
			});
    	}
    	
    	paint(g2){
			this.segments.forEach(segment=>{
				segment.paint(g2);
			});
			
			this.arcs.forEach(arc=>{
				arc.paint(g2);
			});
    	}
    }
    
}