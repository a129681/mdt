const path = require("path")
const fs = require("fs")
const argv = process.argv
const componentName = argv[argv.length-1];
const templatePath = path.join(__dirname,"../template")
const compoentsPath = path.join(__dirname,"../components")
const curComptPath = compoentsPath+"/"+componentName
fs.mkdirSync(curComptPath)


const checkDirectory=function(src,target,callback){
    fs.access(target, fs.constants.F_OK, (err) => {
        if(err){
            fs.mkdirSync(target);
            callback(src,target);
        }else{
            callback(src,target);
        }
      });
}
const copy=function(src,target){
    let paths = fs.readdirSync(src); 
    paths.forEach(function(path){
        var _src=src+'/'+path;
        var _target=target+'/'+path;
        const srcStatsInfo = fs.statSync(_src)
        if(srcStatsInfo.isFile()){ 
            fs.copyFileSync(_src,_target)
        }else if(srcStatsInfo.isDirectory()){  
            checkDirectory(_src,_target,copy);
        }
    })
    
}
async function copyFilesToComponent(){
    // 复制模板文件到组件目录下
    await copy(templatePath,curComptPath)
    //更改组件目下文件插值
    const indexFilePath = path.join(curComptPath,"/index.tsx")
    fs.access(indexFilePath,fs.constants.F_OK,(err)=>{
        if(err){
            console.log('文件未能复制成功')
        }else{
          const fileData = fs.readFileSync(path.join(curComptPath,"/index.tsx"))
        
        }
    })

}
copyFilesToComponent()










