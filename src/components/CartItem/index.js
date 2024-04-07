import { useDispatch } from "react-redux"
import "./cartItem.scss"
import { deleteItem, updateQuantityItem } from "../../redux/actions/cart";
const CartItem = (props) => {

    const { item } = props
    const dispatchCart = useDispatch();

    const handeUP = () =>{
        if(item.quantity < item.stock){
            dispatchCart(updateQuantityItem(item.id,1))
        }
    }
    const handeDown = () =>{
        if(item.quantity > 1){
            dispatchCart(updateQuantityItem(item.id,-1))
        }
    }
    const handleDelete = () =>{
            dispatchCart(deleteItem(item.id,-1))
    }

    return(
        <>
                <div className="cart__item">
                    <img src={item.thumbnail} alt=""></img>
                    <div className="cart__content">
                        <div className="cart__title">
                           {item.title}
                        </div>
                        <div className="cart__price-new">
                            {item.newPrice}$
                        </div>
                        <div className="cart__price-old">
                            {item.price}$
                        </div>
                    </div>
                    <div className="cart__quantity">
                        <button className="cart__quantity-button" onClick={handeDown}>-</button>
                        <span className="cart__quantity-number">{item.quantity}</span>
                        <button className="cart__quantity-button" onClick={handeUP}>+</button>
                        <button className="cart__button-delete" onClick={handleDelete}>Xóa</button>
                    </div>
                   
                </div>
        </>
    )

}
export default CartItem;