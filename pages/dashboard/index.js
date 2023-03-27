import CarDashboard from "@/src/components/Dashboard/CarDashboard";
import { useEffect, useState } from "react";

import { supabase } from "@/src/config/supabase";
import FilterSection from "@/src/components/Dashboard/FilterSection";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

import bg from "../../public/assets/90s-assets/texture2.png";

const Dashboard = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let { data: cardata, error } = await supabase
          .from("Cardata")
          .select("*");

        if (error) {
          console.log(error);
        }
        if (cardata) {
          console.log(cardata);
          setFetchedData(cardata);
          setFilterData(cardata);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black">
      <div className="w-[90%] mx-auto pt-[20px] flex justify-around">
        <Image
          src={"/assets/90s-assets/car_spins.gif"}
          width={250}
          height={15}
        />
        <Image src={"/assets/90s-assets/logo.png"} width={700} height={70} />
        <Image
          src={"/assets/90s-assets/car_spins.gif"}
          width={250}
          height={15}
        />
      </div>
      <Navbar />
      <FilterSection
        cardata={fetchedData}
        filterData={filterData}
        setFilterData={setFilterData}
      />
      <CarDashboard cardata={filterData} />
    </div>
  );
};

export default Dashboard;
