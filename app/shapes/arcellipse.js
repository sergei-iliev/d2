module.exports = function(d2) {
    /**
    *
    * @param {Point} pc - arc center
    * @param {number} w - horizontal radius
    * @param {number} w - vertical radius
    * @param {number} startAngle - start angle in degrees from 0 to 360
    * @param {number} endAngle - end angle in degrees from -360 to 360        
    */
    d2.Arcellipse = class Arcellipse extends d2.Ellipse {
        constructor(pc,w,h) {
      	    super(pc,w,h);    	
            this.startAngle = -20;
            this.rotation=0;
            this.endAngle = 90;
            this.vert=[new d2.Point(0,0),new d2.Point(0,0),new d2.Point(0,0),new d2.Point(0,0),new d2.Point(0,0),new d2.Point(0,0)]; 
        }
        clone(){
        	let copy=new d2.Arcellipse(this.pc.clone(),this.w,this.h);
            copy.startAngle = this.startAngle;
            copy.endAngle = this.endAngle;
        	copy.rotation=this.rotation;
        	return copy;
        }
        get center(){
        	return this.pc;
        }
        get start() {
        	let angles=this._convert(this.startAngle,this.endAngle);
            let x=this.pc.x+(this.w*Math.cos(d2.utils.radians(angles[0])));
            let y=this.pc.y+(this.h*Math.sin(d2.utils.radians(angles[0])));
            
            let p=new d2.Point(x,y);
            p.rotate(this.rotation,this.pc);
            return  p;
        }
        
        get end() {
        	let angles=this._convert(this.startAngle,this.endAngle);
            let x=this.pc.x+(this.w*Math.cos(d2.utils.radians(angles[1])));
            let y=this.pc.y+(this.h*Math.sin(d2.utils.radians(angles[1])));
            
            let p=new d2.Point(x,y);
            p.rotate(this.rotation,this.pc);
            return  p; 
        }
        get vertices(){        	
            this.vert[0].set(this.pc.x-this.w,this.pc.y);
            this.vert[1].set(this.pc.x,this.pc.y-this.h);
            this.vert[2].set(this.pc.x+this.w,this.pc.y);
            this.vert[3].set(this.pc.x,this.pc.y+this.h);       	        	
            let s=this.start;
            let e=this.end;
            this.vert[4].set(s.x,s.y);
            this.vert[5].set(e.x,e.y);   
            return this.vert;
        }
        _convert(start,extend){
    		
    		let s = 360 - start;
    		let e=0;
    		if(extend>0){
    		 e = 360 - (start+extend); 
    		}else{
    		 if(start>Math.abs(extend)){  	
    		   e = s+Math.abs(extend); 
    		 }else{
               e = Math.abs(extend+start);   		 
    		 }		 
    		}
    		return  [s,e];
        }        
        paint(g2){
        	g2.beginPath();  
           	
        	//d2.utils.drawCrosshair(g2,5,[this.start,this.end]);
        	
           	let alpha=this.convert(this.rotation);           	
           	let angles=this._convert(this.startAngle,this.endAngle);
           	
           	
           	g2.beginPath();
           	g2.ellipse(this.pc.x,this.pc.y,this.w, this.h,alpha,d2.utils.radians(angles[0]), d2.utils.radians(angles[1]),this.endAngle>0);
        	  if(g2._fill!=undefined&&g2._fill){
            	  g2.fill();	
              }else{
            	  g2.stroke();
              }
        }         
        
    }
}