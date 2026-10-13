micro frontend assignment: 

a) create products and container apps
b) make necessary changes to consume or use products in container


a) create products and container apps
------------------------------------------
1. install latest node
2. create base project structure
/products 
which have package.json
{
  "name": "products",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack serve"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "faker": "^4.1.0",
    "html-webpack-plugin": "5.5.0",
    "nodemon": "^2.0.15",
    "webpack": "^5.88.0",
    "webpack-cli": "4.10.0",
    "webpack-dev-server": "4.7.4"
  }
}

3. npm install
4. create src/index.js which console list of 5 random product list.
hint : import faker from 'faker';
5. run application on port 8081
hint: create required webpack.config.js

module.exports ={
    mode: 'development',
    devServer: {
        port: 8081
    }
};

package.json update with: "start": "webpack serve"
npm start
browser : 
http://localhost:8081/main.js

6. load js file in browser instead of showing. content of js file
use HtmlWebpackPlugin to refer js in html file

hint: create index.html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
    </body>
</html>

and update webpack.config.js 

const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

7. show list of products on screen (not in console log)
hint : use <div id="dev-products"></div> in index.html
update index.js to inject products in above ID selector using querySelector
document.querySelector('#dev-products').innerHTML = products;

8. create another project container and refer package.json 
{
  "name": "container",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "html-webpack-plugin": "5.5.0",
    "nodemon": "^2.0.15",
    "webpack": "^5.88.0",
    "webpack-cli": "4.10.0",
    "webpack-dev-server": "4.7.4"
  }
}

9. create /container app on same line as products and show console log 'hellow container'

b) make necessary changes to consume or use products in container
------------------------------------------
1. designate app as host and remote
hint : 
host -> container
remote -> products

2. decide which module to available from products to other projects 
hint: products/src/index.js

3. setup module federation plugin for exposing #2 files
hint: 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index'
            }
        })

4. In host, decide which files to get from remote
hint: products/src/index.js

5. setup module federation plugin for fetch #2 files
hint: 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js'
            }
        })

6. in host, refactor entry point to load asynchronously
- rename container/src/index.js to bootstrap.js
- create container/src/index.js file with content
import('./bootstrap');

7. 
