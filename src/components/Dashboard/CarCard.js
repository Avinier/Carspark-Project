import CartContext from "@/src/config/cart-context";
import { supabase } from "@/src/config/supabase";
import Link from "next/link";
import bg from "../../../public/assets/90s-assets/texture4.jpg";
import { useState } from "react";
import Image from "next/image";

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
    <div
      className="bg-cyan-100 p-[20px] rounded-lg w-[300px] cursor-pointer"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "300px 180px",
        objectFit: "contain",
      }}
    >
      <div className="pb-[10px]">
        <h1 className="font-black text-accent text-center text-[20px]">
          {props.title}
        </h1>
        <h2 className="text-center font-bold text-accent--pink">
          {props.company}
        </h2>
      </div>
      <ul className="flex justify-around border-dashed border-2 bg-accent--pink ">
        <li>{props.country}</li>
        <li>{props.engine}</li>
        <li>{props.type}</li>
      </ul>
      <button
        className="rounded-lg bg-main px-[10px] py-[1px] w-[80%] ml-[20px] mt-[10px] mb-[5px] border-dashed border-2"
        onClick={addToCart}
      >
        <Image
          className="mx-auto"
          src={"/assets/90s-assets/add.gif"}
          width={50}
          height={10}
          alt="dfbdg"
        />
      </button>
      {isCart && (
        <button
          className="rounded-lg bg-red-100 px-[10px] py-[5px] w-[80%] ml-[20px] mt-[10px] mb-[5px]"
          onClick={removeFromCart}
        >
          remove
        </button>
      )}
      <Link
        href={`/dashboard/${productId}`}
        className="text-center text-accent--pink"
      >
        show more
      </Link>
    </div>
  );
};

export default CarCard;
