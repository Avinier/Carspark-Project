import Link from "next/link";
import CarCard from "./CarCard";

const CarDashboard = (props) => {
  const DATA = props.cardata;

  return (
    <section>
      <div className="grid grid-cols-4 gap-y-[20px] w-[90%] mx-auto">
        {DATA.map((item, i) => {
          return (
            <CarCard
              key={i}
              obj={item}
              title={item.name}
              company={item.company}
              country={item.country}
              engine={item.engine}
              type={item.type}
              isCart={false}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CarDashboard;
