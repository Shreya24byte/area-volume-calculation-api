const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    const path = req.url;
    console.log("path", path);
    const queryParamsObject = url.parse(path, true).query;
    console.log(queryParamsObject);

    //Routes
    if(path.includes("metrics")){
        const object = queryParamsObject.object;
        const metric = queryParamsObject.metric;
        const radius = queryParamsObject.radius;
        if(object == "circle" && metric == "area"){
            const area = 3.14 * radius * radius;
            const roundedArea = Math.floor(area);
            console.log(roundedArea);
            res.write(`area of the circle is ${roundedArea}`);
            res.end();
        } else if(object == "sphere" && metric =="volume"){
            const volume = 4/3 * (3.14 * radius * radius * radius);
            const roundedVol = Math.floor(volume);
            res.write(`volume of the sphere is ${roundedVol}`);
            res.end();
        }else {
            res.write("Error");
            res.end();
        }
    }
  }).listen(8080);