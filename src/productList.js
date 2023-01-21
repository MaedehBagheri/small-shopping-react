import { Component } from "react";
import Product from "./components/Product/Product";
class ProductList extends Component{
    state ={
        product:[
            {title:"react1", price:"78",id:1,quantity:1},
            {title:"react2", price:"79",id:2,quantity:2},
            {title:"react3", price:"75",id:3,quantity:3},
        ]
    }



 removeHandler=(id)=>{
    console.log("delete",id);
    const filteredProducts =this.state.product.filter((p)=> p.id !== id);
    this.setState({product:filteredProducts});
}
incrementHandler=(id)=>{
    const products =[...this.state.product];
  const selectedItem=  products.find(p => p.id === id);
  selectedItem.quantity++;
  this.setState({product:products});
}

changeHandler=(event ,id)=>{
    const products =[...this.state.product];
    const selectedItem=  products.find(p => p.id === id);
    selectedItem.title =event.target.value;
    this.setState({product:products})
}

DecrementHandler=(id)=>{
    const products =[...this.state.product];
    const selectedItem=  products.find(p => p.id === id);
    if(selectedItem.quantity===1){
const filteredProducts= products.filter((P) => P.id !== id);
this.setState({product:filteredProducts});
    }else{

        selectedItem.quantity--;
        this.setState({product:products});
    }
}

    render(){
        if (this.state.product.length===0)
        return <div>there is no product in cart</div>
        return(
<div>
{this.state.product.map((product,index)=>{
                   return(<>
                      <Product 
                     product={product} 
                       onDelete={()=>this.removeHandler(product.id)} 
                       key={index}
                       onDecrement={()=> this.DecrementHandler(product.id)}
                       onChange={(e)=>this.changeHandler(e,product.id)}
                       onIncrement={()=> this.incrementHandler(product.id)}
                       />
               
                   </>
                   
                   )
            })}
</div>
        )
        }
}



export default ProductList;