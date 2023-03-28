import React, { useEffect } from "react";
import CarModal from "@/src/components/Dashboard/CarModal";
import { supabase } from "@/src/config/supabase";

const Product = ({ product }) => {
  return (
    <>
      <CarModal item={product} />
    </>
  );
};

async function fetchData() {
  try {
    let { data: cardata, error } = await supabase.from("Cardata").select("*");

    if (error) {
      console.log(error);
    }
    if (cardata) {
      return cardata;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps({ params }) {
  const productId = params.productId;
  const products = await fetchData();

  const product = products.filter((item) => {
    return item.name.toLowerCase().replace(/ /g, "-") === productId;
  });

  return {
    props: {
      product: product[0],
    },
  };
}
export async function getStaticPaths() {
  const products = await fetchData();

  return {
    paths: products.map((prod, i) => {
      const productId = prod.name.toLowerCase().replace(/ /g, "-");
      return {
        params: {
          productId,
        },
      };
    }),
    fallback: false,
  };
}

export default Product;
