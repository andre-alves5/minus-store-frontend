import React from 'react';

const Cart = (props) => {
  let { cartItems } = props;

  const handleRemoveFromCart = () => {
    return (cartItems = []);
  };

  return (
    <div>
      {cartItems.length !== 0 ? (
        <div>
          <ul>
            <p>Produtos</p>
            {cartItems.map((cartItem) => (
              <div key={cartItem._id}>
                <li> {cartItem.title}</li>
                <li> {cartItem.color}</li>
                <li> {cartItem.size}</li>
                <li> {cartItem.price}</li>
              </div>
            ))}
          </ul>
          <hr />
          <p>Frete</p>
          <p>Motoboy</p>
          <p>Correios</p>
          <hr />
          <button onClick={handleRemoveFromCart}>Continuar</button>
          <button onClick={handleRemoveFromCart}>Remover</button>
        </div>
      ) : (
        <div>Carrinho Vazio</div>
      )}
    </div>
  );
};

export default Cart;
