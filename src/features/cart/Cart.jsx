import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  console.log(cart);
  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}>Back to the menu !!!</LinkButton>

      <h2 className="font-tibo text-tibo-500 mt-7 text-xl font-semibold">
        Your cart, %NAME%
      </h2>

      <ul className="mt-3 divide-y divide-stone-500 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order Pizzas</Button>

        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
