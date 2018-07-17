module.exports = function(d2) {

    d2.Arc = class Arc {
        /**
         *
         * @param {Point} pc - arc center
         * @param {number} r - arc radius
         * @param {number} startAngle - start angle in radians from 0 to 360
         * @param {number} endAngle - end angle in radians from -360 to 360        
         */
        constructor(pc=new d2.Point(), r=1, startAngle=0, endAngle=360) {
            this.pc = pc.clone();
            this.r = r;
            this.startAngle = startAngle;
            this.endAngle = endAngle;            
        }
        
        get start() {
            let p0 = new d2.Point(this.pc.x + this.r, this.pc.y);
            p0.rotate(this.startAngle, this.pc);
            return p0;
        }
                
        get middle() {
            let angle = this.endAngle>0 ? this.startAngle + this.sweep/2 : this.startAngle - this.sweep/2;
            let p0 = new d2.Point(this.pc.x + this.r, this.pc.y);
            console.log(angle);
            p0.rotate(angle, this.pc);
            return p0;
        }
        
        get end() {
            let p0 = new d2.Point(this.pc.x + this.r, this.pc.y);
            p0.rotate((this.startAngle+this.endAngle), this.pc);
            return p0;
        }
        
        get sweep(){
        	//let sv=new d2.Vector(this.pc,this.start);
        	//let ev=new d2.Vector(this.pc,this.end);
        	
        	//***comes in radians
        	//let angle= sv.angleTo(ev);
        	return Math.abs(this.endAngle);
        }
        
        convert(start,extend){
    		
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
        	//convert to HTML Canvas API
    		let angles=this.convert(this.startAngle,this.endAngle);
        	g2.arc(this.pc.x,this.pc.y,this.r, d2.utils.radians(angles[0]), d2.utils.radians(angles[1]),this.endAngle>0);
        	g2.stroke();
        	
            let ps=this.start;
            let pe=this.end;
            let pm=this.middle;
            d2.utils.drawCrosshair(g2,5,[ps,pe,pm]);
        }
        

    }
}