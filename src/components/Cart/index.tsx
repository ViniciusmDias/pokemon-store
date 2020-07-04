import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBagFill } from 'react-icons/bs';

import actionsToast from '../../store/actions/Toast';
import actionsCart from '../../store/actions/Cart';
import Drawer from '../../containers/Drawer';
import CartItem from './CartItem/index';
import Button from './CartButton/index';
import CountTotalPrice from '../../utils/countPrice';

import { CartIcon, Card, CartHeader, CartProducts, CartInfo } from './styles';

interface RootState {
  cartReducer: {
    items: any;
    counter: number;
  };
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);
  const cartCounter = useSelector(
    (state: RootState) => state.cartReducer.counter,
  );

  useEffect(() => {
    dispatch(actionsCart.getCart());
  }, [dispatch]);

  function openCart() {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  function handleCheck() {
    if (cartCounter > 0) {
      dispatch(actionsCart.cleanCart());
      dispatch(actionsToast.addToast('YAY! Compra finalizada.', false));
    } else {
      dispatch(actionsToast.addToast('OOPS! Sacola Vazia.', true));
    }
  }

  return (
    <>
      <CartIcon onClick={openCart}>
        <BsBagFill size={24} />
        <sup>
          <span>{cartCounter}</span>
        </sup>
      </CartIcon>

      {showCart && (
        <Drawer>
          <Card>
            <CartHeader>
              <button onClick={openCart}>
                <AiOutlineClose size={18} color="#fff" />
              </button>
              <h3>Sua sacola ({cartCounter})</h3>
            </CartHeader>

            <CartProducts>
              <ul className="cart__products">
                {cartCounter > 0 ? (
                  cartItems.map((product: any, index: any) => (
                    <CartItem key={index} product={product} />
                  ))
                ) : (
                  <p>Sacola Vazia</p>
                )}
              </ul>

              <CartInfo>
                <div className="info__content">
                  <strong className="info__text--color">Total</strong>
                  <strong className="info__text--color">
                    R$ {CountTotalPrice(cartItems)}
                  </strong>
                </div>

                <Button handleCheck={handleCheck} />
              </CartInfo>
            </CartProducts>
          </Card>
        </Drawer>
      )}
    </>
  );
};
export default Cart;
