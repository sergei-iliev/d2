module.exports = function(d2) {

    d2.Arcellipse = class Arcellipse extends d2.Ellipse {
        constructor(pc,w,h) {
      	    super(pc,w,h);    	
            this.startAngle = -130;
            this.endAngle = 90;
        }
        clone(){
        	let copy=new d2.Arcellipse(this.pc.clone(),this.w,this.h);
            copy.startAngle = this.startAngle;
            copy.endAngle = this.endAngle;
        	copy.rotation=this.rotation;
        	return copy;
        }
        get start() {
            let x=this.pc.x+(this.w*Math.cos(this.convert(this.startAngle)));
            let y=this.pc.y+(this.h*Math.sin(this.convert(this.startAngle)));
            
            let p=new d2.Point(x,y);
            p.rotate(this.rotation,this.pc);
            return  p;
        }
        
        get end() {
            let x=this.pc.x+(this.w*Math.cos(this.convert(this.endAngle)));
            let y=this.pc.y+(this.h*Math.sin(this.convert(this.endAngle)));
            
            let p=new d2.Point(x,y);
            p.rotate(this.rotation,this.pc);
            return  p; 
        }
        paint(g2){
        	g2.beginPath();  
           	
        	d2.utils.drawCrosshair(g2,5,[this.start,this.end]);
        	
           	let alpha=this.convert(this.rotation);
           	let start=this.convert(this.startAngle);
           	let end=this.convert(this.endAngle);
           	
           	
           	g2.beginPath();
           	g2.ellipse(this.pc.x,this.pc.y,this.w, this.h,alpha, start,end);
        	  if(g2._fill!=undefined&&g2._fill){
            	  g2.fill();	
              }else{
            	  g2.stroke();
              }
        }         
        
    }
}