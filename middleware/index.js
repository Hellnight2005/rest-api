const fs = require("fs");
function logReqRes(filename){
    return (req,res,next) =>{
        fs.appendFile(
            filename, 
            '\n${Date.Now() : ${req.ip} ${req.method}: ${req.path}\n',
            (err ,data) => {
                next();
            }
        );
    };
};

module.exports = {
    logReqRes,
};