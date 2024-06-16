import { createContext,useState,useContext} from "react";
import CartModal from "./components/cartModal";


export const context = createContext();

export function useValue(){
    const value = useContext(context)
    return value;
}

function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);
    const [cart,setCart] = useState([]);

    const handleAdd = (product) => {
        const index = cart.findIndex((item)=>item.id === product.id);
        if(index === -1){
           setCart([...cart,{...product,qty:1}])
           setTotal(total+product.price);
           console.log(cart);
        }else{
         cart[index].qty++;
         setCart(cart);
         setTotal(total+cart[index].price);
         console.log(cart);
        } 
        setItem(item+1);
      };
    
      const handleRemove = (product) => {
        const index = cart.findIndex((item)=>item.id===product.id);
        if(index!==-1){
          cart[index].qty--;
          setItem(item-1);
          setTotal(total-cart[index].price);
          if(cart[index].qty===0){
            cart.splice(index,1);
          }
        }
        setCart(cart);
      };

      const handleReset = ()=>{
        setTotal(0);
        setItem(0);
        setCart([]);
      }
      const handleCart = ()=>{
        setShowCart(!showCart);
      }
      const clearCart = ()=>{
        setCart([]);
        setTotal(0);
        setItem(0);
      }
    return(
        <context.Provider value={{total,item,handleAdd,handleRemove,handleReset,handleCart,cart,clearCart,handleCart}}>
            {showCart && <CartModal/>}
            {children}
        </context.Provider>
    )
}
export default CustomItemContext
