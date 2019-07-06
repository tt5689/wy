const path = require('path');

module.exports={
    devServer:{
        open:true,
        proxy:{ //跨域配置项
            // 当遇到这个路径的时候,将你的本地域名替换成target中的域名
            "/xhr":{
                target:"https://m.you.163.com",//目标
                changeOrigin:true//允许跨域代理
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias: {
                "@":path.resolve(__dirname,"./src/"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/store"),
                "utils":path.resolve(__dirname,"./src/utils"),
                "views":path.resolve(__dirname,"./src/views"),
                "api":path.resolve(__dirname,"./src/api")
            }
            
        }
    }
}