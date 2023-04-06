import cartImage from "./assets/cartImage.svg"

const CartWidget = () => {
    return (
        <div>
           <img src={cartImage} alt="carrito-compras" className="cartW"/>
           0
        </div>
    )
}

export default CartWidget