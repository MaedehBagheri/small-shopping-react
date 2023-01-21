


import ProductList from "./productList";
import {Component} from "react";
import "./app.css"
class App extends Component{


    render(){
        return(
            <div className="container" id="title">
               <h1>shopping App</h1>
            <ProductList/>
            
                  </div>
        )
    }
}





export default App;