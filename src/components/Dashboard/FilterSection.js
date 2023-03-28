import { useEffect, useState } from "react";

const FilterButton = (props) => {
  function clickHandler() {
    if (props.filterType === "all") {
      window.location.reload(true);
    }

    const newArr = props.data.filter((filtered) => {
      if (props.filterType === "engine") {
        return filtered.engine === props.name;
      }
      if (props.filterType === "country") {
        return filtered.country === props.name;
      }
    });
    props.setData(newArr);
  }

  return (
    <button
      className="bg-accent--yellow px-[10px] py-[5px] rounded-lg border-2 border-dashed "
      onClick={clickHandler}
    >
      {props.name}
    </button>
  );
};

const filterEngineArray = ["V8", "I6"];
const filterCountryArray = ["America", "England", "Germany"];

const FilterSection = (props) => {
  return (
    <div className="flex w-[50%] mx-auto justify-around mb-[30px]">
      {filterEngineArray.map((item, i) => {
        return (
          <FilterButton
            key={`engine_${i}`}
            name={item}
            filterType="engine"
            data={props.filterData}
            setData={props.setFilterData}
          />
        );
      })}
      {filterCountryArray.map((item, i) => {
        return (
          <FilterButton
            key={`country_${i}`}
            name={item}
            filterType="country"
            data={props.filterData}
            setData={props.setFilterData}
          />
        );
      })}
      <FilterButton
        key="back"
        name="All"
        filterType="all"
        data={props.cardata}
        setData={props.setFilterData}
      />
    </div>
  );
};

export default FilterSection;
