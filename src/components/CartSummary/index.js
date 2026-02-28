// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.reduce(
        (sum, eachItem) => sum + eachItem.quantity,
        0,
      )
      const totalAmount = cartList.reduce(
        (sum, eachItem) => sum + eachItem.price * eachItem.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="cart-order-heading">
            <span className="order-styling">Order Total: </span>Rs {totalAmount}
            /-
          </h1>
          <p className="cartItems-counter-text">{totalItems} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
