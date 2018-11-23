# React Boilerplate
Este proyecto sirve para tener una plantilla para cualquier otro proyecto en React. Incluye algunas herramientas básicas como axios, jest y react-router. 

1. [ Instalación. ](#inst)
2. [ Uso. ](#uso)
3. [Fuentes](#fuentes)
4. [Licencia](#licencia)

<a name="inst"></a>
## 1. Instalación

Para descargar e instalar la herramientas de esta plantilla se debe hacer lo siguiente: 

Paso 1: Ir a la carpeta donde se desea descargar el proyecto, abrir la consola de git (click derecho en el explorador de archivos, GIT bash here) y ejecutar el siguiente comando: 
```
git clone https://github.com/arr15334/ReactBoiling
```

Paso 2: Abrir una consola normal donde se descargó el proyecto y ejecutar: 

```
npm i
```

Paso 3: Ejecutar el programa
```
npm start
```

Ahora al abrir un navegador en la dirección localhost:8080/dist se podrá ver el proyecto.

<a name="uso"></a>
## 2. Uso de las herramientas
El proyecto incluye algunas herramientas básicas para desarrollar. Estas son:
### 2.1 React Router
Sirve para manejar las rutas de una aplicación web, permitiendo navegar por diferentes páginas. El funcionamiento de esta herramienta se ve ejemplificado en el componente AppRouter.jsx:

```javascript
import React from 'react'
import App from './App.jsx'
import Demo from './Demo.jsx'
import css from './router.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">PaginaX</Link>
            </li>
            <li>
              <Link to="/demo/">PaginaY</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={App} />
        <Route path="/demo/" exact component={Demo} />
      </div>
    </Router>
  );
```

### 2.2 Jest + enzyme
Estas herramientas permiten la implementación de pruebas. Para ejecutar las pruebas se puede correr este comando: 
```
npm run test
```

Se puede encontrar un ejemplo en /src/__test__/App.test.jsx

```javascript
import React from 'react'
import {shallow} from '../enzyme'
import App from '../App.jsx'

describe('My first collection of test', () => {
  it('renders the header title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.header').text()).toEqual('Boiling plate')
  })
})

```

Este ejemplo verifica que en el componente App.jsx se encuentre un div de clase header, con el texto Boiling plate.

### 2.3 Axios
Axios es una librería de npm, que permite hacer HTTP requests. En el archivo Demo.jsx se puede ver el ejemplo de una GET request al API http://www.icndb.com/api/. 
```javascript
return Axios.get('http://api.icndb.com/jokes/random')
            .then((data) => {
                const responseData = data.data || ''
                const joke = responseData.value.joke || ''
                this.setState({joke})
            })
```
Es importante resaltar que los métodos axios.get(url) son una [promesa](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise), por lo que se deben tratar como tal. Lo que retorna el método GET es la respuesta del API en un JSON, por lo que se parsea luego solo la data de la respuesta en donde se encuentra un chiste random.

### 2.4 url-loader y file-loader
Estos paquetes sirven para cargar imágenes o archivos a la aplicación web. En este ejemplo se utilizaron para cargar fonts e imágenes:
```
@import url("https://fonts.googleapis.com/css?family=Allerta+Stencil");
...
background-image: url('../images/icon.png');
```

### 2.5 Sass
Sass es un lenguaje de hoja de estilos basado en CSS. Se crea un archivo style.scss donde se escriben las reglas de estilos similar a un archivo .css pero con algunas variaciones de sintaxis, como el uso de variables y reglas anidadas. 
Para poder implementarlo se usaron las librerías node-sass, css-loader y style-loader.

### 2.6   ESLint
ESLint es una herramienta cuyo objetivo es introducir reglas del formato de los archivos, como por ejemplo, el tamaño del tab, si se debe o no usar punto y coma al final de cada línea, etc.
Para usarlo se necesita especificar el conjunto de reglas en un archivo .eslintrc.js. En este ejemplo se usó el conjunto de reglas de airbnb con la siguiente instrucción:
```javascript
module.exports = {
    "extends": "airbnb-base"
}
```

### 2.7 Babel
Babel es un traspilador que convierte los componentes de React a archivos .html y .js.
Para que funcione se debe incluir un archivo .babelrc donde se especifica que tipo de código se debe convertir. En este caso se incluyó es2017 y react.

### 2.8 Webpack
Webpack se encarga de empaquetar todos los archivos y producir finalmente con ayuda de Babel los archivos que ejecuta el navegador web. Es necesario incluir un archivo webpack.config.js donde se especifica lo siguiente:
Carpeta donde se generará el output:
```javascript
const config = {
  mode: 'development',
  output: {
    publicPath: '/dist'
  },
```
Conjunto de reglas: 
Regla básica
```javascript
 {
        test: /\.jsx?/,
        use: ['babel-loader']
      },
```
Reglas para usar sass y cargar imágenes:
```javascript
{
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
            // include,
            // exclude,
        use: ['url-loader']
      }
    ]
  }
}

module.exports = config
```
<a name="fuentes"></a>
## 3. Fuentes y más información
* [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
* [Jest+enzyme](https://www.npmjs.com/package/jest-enzyme)
* [Sass](https://sass-lang.com/guide)
* [Chuck Norris API](http://www.icndb.com/api/)
* [Axios](https://github.com/axios/axios)

<a name="licencia"></a>
## 4. Licencia
Dele uselo
