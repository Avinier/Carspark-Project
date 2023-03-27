import CarDashboard from "@/src/components/Dashboard/CarDashboard";
import { useEffect, useState } from "react";

import { supabase } from "@/src/config/supabase";
import FilterSection from "@/src/components/Dashboard/FilterSection";

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
    <>
      <h1 className="font-black text-[30px] pb-[30px] text-center">
        Carspark Dashboard
      </h1>
      <FilterSection
        cardata={fetchedData}
        filterData={filterData}
        setFilterData={setFilterData}
      />
      <CarDashboard cardata={filterData} />
    </>
  );
};

export default Dashboard;
