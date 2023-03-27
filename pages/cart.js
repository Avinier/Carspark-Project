import { supabase } from "@/src/config/supabase";
import { useEffect, useState } from "react";

import CarCard from "@/src/components/Dashboard/CarCard";

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
    <section>
      <h1>CART</h1>
      <div>
        <h2>Items: </h2>
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
    </section>
  );
};

export default Cart;
