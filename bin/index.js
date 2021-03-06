const { Select } = require('enquirer');
const baseConfig = require('../build/webpack.config.base');
const glob = require("glob");
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require("path")

function getComponentsName(globPath){
  let files = glob.sync(globPath)
  let entries = [];
  files.map((file)=>{
    const filePathNames = file.split("/");
    entries.push({
      name:filePathNames[filePathNames.length-1],
      pathName:file
    })
  })
  return entries
}

let entries = getComponentsName(path.join(__dirname,"../components/+(*)")); 
const prompt = new Select({
  name: 'components',
  message: 'Pick a compoents',
  choices: entries.map((v)=>{
    return v.name
  })
});
// entries.map((v)=>{return v.name})
prompt.run()
  .then((answer)=>{
    const comptDemoPath = answer+'/demo'
    baseConfig.mode = 'development'
    baseConfig.plugins.push(new webpack.DefinePlugin({
      COMPONENTNAME:JSON.stringify(answer),
      COMPONENTPATH:JSON.stringify(comptDemoPath)
    }))
    const options = {
      contentBase: path.join(__dirname, "../build/dist"),
      hot: true,
      host: 'localhost',
      open:true,
      stats:"errors-only"
    };
   // webpackDevServer.addDevServerEntrypoints(baseConfig, options);
    const compiler = webpack(baseConfig);
    const server = new webpackDevServer(compiler, options);
    server.listen(9000, '127.0.0.1', (err) => {
     if(err){
       console.log(err)
     }
    });
  }).catch(console.error);





  
