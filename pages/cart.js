import { supabase } from "@/src/config/supabase";
import { useEffect, useState } from "react";

import CarCard from "@/src/components/Dashboard/CarCard";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data: cardata, error } = await supabase
        .from("Cardata-Cart")
        .select("*");

      if (error) {
        console.log(error);
      }
      if (cardata) {
        setFetchedData(cardata);
      }
    }
    fetchData();
  }, [fetchedData]);

  return (
    <section className="bg-black min-h-[100vh]">
      <h1 className="text-center font-black text-[30px] text-accent--pink">
        CART ITEMS
      </h1>
      <Link href={"/dashboard"}>
        <Image
          className="absolute left-[5%] top-[1%]"
          src={"/assets/90s-assets/back.gif"}
          width={100}
          height={50}
        />
      </Link>
      <div className="grid grid-cols-3 gap-y-[20px] mx-auto w-[70%] mt-[50px]">
        {fetchedData.map((item, i) => {
          return (
            <CarCard
              key={i}
              title={item.name}
              company={item.company}
              country={item.country}
              engine={item.engine}
              type={item.type}
              isCart={true}
            />
          );
        })}
      </div>
      <Image
        className="absolute left-[40%] top-[60%]"
        src={"/assets/90s-assets/car_garage.gif"}
        width={300}
        height={100}
      />
      <Link className="mx-auto" href={"/checkout"}>
        <Image
          src={"/assets/90s-assets/checkout.gif"}
          width={200}
          height={100}
        />
      </Link>
    </section>
  );
};

export default Cart;
