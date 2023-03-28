import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/src/config/supabase";

import bg from "../../../public/assets/90s-assets/texture3.jpg";
import bg2 from "../../../public/assets/90s-assets/texture4.jpg";

const CarModal = ({ item }) => {
  async function addToCart() {
    const { data, error } = await supabase
      .from("Cardata-Cart")
      .insert([props.obj]);

    if (error) {
      console.log(error);
    }
    console.log("cart added");
  }
  return (
    <div
      className="min-h-[100vh]"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Link href={"/dashboard"}>
        <Image
          className="absolute left-[5%] top-[1%]"
          src={"/assets/90s-assets/back.gif"}
          width={100}
          height={50}
        />
      </Link>
      <section
        className="mx-auto border-[4px] border-dashed w-[60%] "
        style={{
          backgroundImage: `url(${bg2.src})`,
          objectFit: "contain",
        }}
      >
        <h1 className="font-black text-accent text-center text-[40px]">
          {item.name}
        </h1>
        <p className="text-center font-bold text-accent--pink text-[20px]">
          {item.description}
        </p>
        <Image
          className="mx-auto my-[20px]"
          src={item.image}
          width={500}
          height={250}
        />
        <button
          className="rounded-lg bg-main px-[10px] w-[50%] mx-auto border-dashed border-2"
          onClick={addToCart}
        >
          <Image
            className="mx-auto mb-[20px]"
            src={"/assets/90s-assets/add.gif"}
            width={50}
            height={50}
            alt="dfbdg"
          />
        </button>
      </section>
    </div>
  );
};

export default CarModal;
