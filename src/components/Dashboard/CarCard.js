import CartContext from "@/src/config/cart-context";
import { supabase } from "@/src/config/supabase";
import Link from "next/link";

import { useState } from "react";

const CarCard = (props) => {
  const [isCart, setIsCart] = useState(props.isCart);

  async function addToCart() {
    const { data, error } = await supabase
      .from("Cardata-Cart")
      .insert([props.obj]);

    if (error) {
      console.log(error);
    }
    console.log("cart added");
  }

  async function removeFromCart() {
    const { data, error } = await supabase
      .from("Cardata-Cart")
      .delete()
      .eq("name", props.title);
  }

  const productId = props.title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="bg-cyan-100 p-[20px] rounded-lg w-[300px] cursor-pointer">
      <div className="pb-[10px]">
        <h1>{props.title}</h1>
        <h2>{props.company}</h2>
      </div>
      <p className="pb-[5px]">description</p>
      <ul className="flex justify-around bg-red-100">
        <li>{props.country}</li>
        <li>{props.engine}</li>
        <li>{props.type}</li>
      </ul>
      <button
        className="rounded-lg bg-green-100 px-[10px] py-[5px] w-[80%] ml-[20px] mt-[10px] mb-[5px]"
        onClick={addToCart}
      >
        add
      </button>
      {isCart && (
        <button
          className="rounded-lg bg-red-100 px-[10px] py-[5px] w-[80%] ml-[20px] mt-[10px] mb-[5px]"
          onClick={removeFromCart}
        >
          remove
        </button>
      )}
      <Link href={`/dashboard/${productId}`}>show more</Link>
    </div>
  );
};

export default CarCard;
