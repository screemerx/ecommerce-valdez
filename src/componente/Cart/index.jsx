import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "./Cart.css";
const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "John",
      email: "john@example.com",
      phone: "123-456-1234",
      address: "fondo de bikini",
    },
    items: cart.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (cart.length === 0) {
    return (
      <>
        <p className="noHayElementos">No Hay Elementos en el Carrito</p>
        <Link className="noHayElementos__button" to="/">
          Ver nuestros Productos
        </Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="button__cart">
        <p>Total: {totalPrice()}</p>
        <button onClick={handleClick}> {} Emitir Compra</button>
      </div>
    </>
  );
};

export default Cart;
