const path = require("path"); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Archivo necesario para trabajar con HTML.

module.exports = {
  //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
  entry: "./src/index.js", //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
  output: {
    //Donde se envía el proyecto estructurado y compilado listo para producción.
    path: path.resolve(__dirname, "dist"), //Creamos el lugar dónde se exportará el proyecto.
    filename: "main.js", //Este es el nombre del archivo final para producción.
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"], //Extensiones que vamos a utilizar.
  },
  module: {
    //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    rules: [
      //Reglas
      {
        // Estructura de Babel
        test: /\.js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
        exclude: /node_modules/, //Excluimos la carpeta de node modules
        use: {
          loader: "babel-loader", //Utilizar un loader como configuración establecida.
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          }
        ],
      },  
    ],  
  },
  plugins: [
    //Establecemos los plugins que vamos a utilizar
    new HtmlWebpackPlugin(
      {
        template: "./public/index.html", //Dirección donde se encuentra el template principal
        filename: "./index.html", //El nombre que tendrá el archivo
      }
    ),
  ],
  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    publicPath: "/"
  }
};
