'use strict';


class d2 {
    constructor() {
      
    }
    

};

let d = new d2();

require("./shapes/point")(d);
require("./shapes/segment")(d);
require("./shapes/vector")(d);
require("./shapes/polygon")(d);
require("./shapes/rectangle")(d);
require("./shapes/hexagon")(d);
require("./shapes/arc")(d);
require("./shapes/circle")(d);
require("./shapes/roundrectangle")(d);
require("./shapes/oval")(d);
require("./shapes/utils")(d);
module.exports = d;