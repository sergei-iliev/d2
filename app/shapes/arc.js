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
            this.pc = pc;
            this.r = r;
            this.startAngle = startAngle;
            this.endAngle = endAngle;            
        }
        static createArcRB(center, start, end) {
            let startAngle =360 -(new d2.Vector(center,start)).slope;
            let endAngle = (new d2.Vector(center, end)).slope;
            
            console.log(startAngle+"::"+endAngle);
            
            if (d2.utils.EQ(startAngle, endAngle)) {
                endAngle = 360;
            }
            let r = (new d2.Vector(center, start)).length;

            return new d2.Arc(center, r, startAngle, -90);
        }        
        static createArcLT(center, start, end) {
            let startAngle =360 -(new d2.Vector(center,start)).slope;
            let endAngle = (new d2.Vector(center, end)).slope;
            
            console.log(startAngle+"::"+endAngle);
            
            if (d2.utils.EQ(startAngle, endAngle)) {
                endAngle = 360;
            }
            let r = (new d2.Vector(center, start)).length;

            return new d2.Arc(center, r, startAngle, 90);
        }
        get start() {
            let p0 = new d2.Point(this.pc.x + this.r, this.pc.y);
            p0.rotate(this.startAngle, this.pc);
            return p0;
        }
                
        get middle() {
            let angle = this.endAngle>0 ? this.startAngle + this.sweep/2 : this.startAngle - this.sweep/2;
            let p0 = new d2.Point(this.pc.x + this.r, this.pc.y);
            p0.rotate(angle, this.pc);
            return p0;
        }
        
        get end() {
            let p0 = new d2.Point(this.pc.x + this.r, this.pc.y);
            p0.rotate((this.startAngle+this.endAngle), this.pc);
            return p0;
        }
        
        get sweep(){
        	return Math.abs(this.endAngle);
        }
        contains(pt){
     	   return false;    	   
        }
        rotate(angle,center = {x:0, y:0}){
        	 this.pc.rotate(angle,center);
        	 this.startAngle+=angle;
        }
        static arcSE(center, start, end, counterClockwise) {
//            let {vector} = Flatten;
//            let startAngle = vector(center,start).slope;
//            let endAngle = vector(center, end).slope;
//            if (Flatten.Utils.EQ(startAngle, endAngle)) {
//                endAngle += 2*Math.PI;
//                counterClockwise = true;
//            }
//            let r = vector(center, start).length;
//
//            return new Arc(center, r, startAngle, endAngle, counterClockwise);
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
        	
            //let ps=this.start;
            //let pe=this.end;
            //let pm=this.middle;
            //d2.utils.drawCrosshair(g2,5,[ps,pe,pm]);
        }
        

    }
}