import { CartCounter } from "@/app/components/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple page to manage products in the cart",
};

export const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />      
    </div>
  );
};

export default CounterPage;
