var fs = require("fs");
var path = require("path");
//modules
module.exports = function (dir,ext,callback){
    var list = [];
    fs.readdir(dir,function(err,data){
        if(err) return callback(err);
        //list.push(dir);
        data.forEach(function(file){
            if(path.extname(file) === "."+ ext){
                console.log(list.push(file));
            }
        });
        return callback(null,data);
    });
}
