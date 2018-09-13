var FontMetrics=require('text/fontmetrics').FontMetrics;

module.exports = function(d2) {
	d2.FontText = class FontText{
		constructor(pt,text,fontSize){
			this.anchorPoint=pt;
			this.text=text;
			this.fontSize=fontSize;
		    this.rotation=0;	
		    this.reset(); 
		}
		reset(){
		    this.metrics = FontMetrics({
		    	  fontFamily: 'Monospace',
		    	  fontWeight: 'normal',
		    	  fontSize: this.fontSize,
		    	  origin: 'baseline',
		    	  text:this.text
		    	});	
		}
		clone(){
			let copy=new FontText(this.anchorPoint.clone(),this.text,this.size);
			copy.rotation=this.rotation;
			return copy;
		}
		setText(text){
			this.text=text;
			this.reset();
		}
		setSize(size){
			this.fontSize=size;
			this.reset();
		}
		scale(alpha){
	      	this.anchorPoint.scale(alpha);
			this.fontSize*=alpha;
		    this.reset();
			
		}
		move(offsetX,offsetY){
			this.anchorPoint.move(offsetX,offsetY);
		}
		rotate(angle, center = {x:this.anchorPoint.x, y:this.anchorPoint.y}) {
        	this.rotation=angle;
        	this.anchorPoint.rotate(angle,center);
        }
		mirror(line){
		   	
		}
		/**
		if (x-x1)/(x2-x1) = (y-y1)/(y2-y1) = alpha (a constant), then the point C(x,y) will lie on the line between pts 1 & 2.
		If alpha < 0.0, then C is exterior to point 1.
		If alpha > 1.0, then C is exterior to point 2.
		Finally if alpha = [0,1.0], then C is interior to 1 & 2.
		*/
		contains(pt){	
			let ps=this.anchorPoint;
			let pe=new d2.Point(ps.x,ps.y);
			pe.move(this.metrics.width,0);
			
			pe.rotate(360-this.rotation,this.anchorPoint);
			
			let l=new d2.Line(ps,pe);
        	let projectionPoint=l.projectionPoint(pt);
        	
		    let a=(projectionPoint.x-ps.x)/((pe.x-ps.x)==0?1:pe.x-ps.x);
		    let b=(projectionPoint.y-ps.y)/((pe.y-ps.y)==0?1:pe.y-ps.y);

		    let dist=projectionPoint.distanceTo(pt);
		    
		    if(0<=a&&a<=1&&0<=b&&b<=1){  //is projection between start and end point
		        if(dist<=(Math.abs(this.metrics.xHeight * (this.fontSize)))){
		        	return true;
		        }    
		    	
		    }
        	
		}
		paint(g2){		
			g2.font = ""+parseInt(this.fontSize)+"px Monospace";
			g2.save();
			g2.translate(this.anchorPoint.x,this.anchorPoint.y);
			g2.rotate(d2.utils.radians(this.rotation));
			

			g2.fillText(this.text,0,0);
				
			g2.restore();			
			
			
		}
	}

}