import "./product.css";
import {BiTrash} from "react-icons/bi";
const Product =(props)=>{
    return(
       <div className="product">
        <p>productName: {props.product.title}</p>
        <p>product Price :{props.product.price}$</p>
        <span className="quantity">{props.product.quantity}</span>

        <input type="text" 
        onChange={props.onChange}
         value={props.product.title}
         className="input"
         />

 <button
  className="increment remove"
   onClick={props.onDecrement}>

    {props.product.quantity>1 ? "-" : <BiTrash/>}
 </button>

 
        <button className="increment" onClick={props.onIncrement}>+</button>
        <button onClick={props.onDelete} className="delete">delete</button>
       </div>
    )
}



export default Product;