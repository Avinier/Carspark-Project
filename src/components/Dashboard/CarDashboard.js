import Link from "next/link";
import Image from "next/image";
import CarCard from "./CarCard";

import bg from "../../../public/assets/90s-assets/texture1.jpg";

const CarDashboard = (props) => {
  const DATA = props.cardata;

  return (
    <section
      style={{ backgroundImage: `url(${bg.src})` }}
      className="border-[3px] w-[65%] pl-[30px] py-[30px] min-h-[200vh]  mx-auto border-dashed"
    >
      <Image
        className="absolute left-[85%]"
        src={"/assets/90s-assets/motor.gif"}
        width={200}
        height={200}
      />
      <Image
        className="absolute top-[80%] left-[3%] "
        src={"/assets/90s-assets/flagm.gif"}
        width={200}
        height={200}
      />
      <Image
        className="absolute top-[180%] left-[0%] -rotate-[15deg]"
        src={"/assets/90s-assets/car_classic.gif"}
        width={350}
        height={100}
      />
      <Image
        className="absolute top-[120%] left-[80%] rotate-[15deg]"
        src={"/assets/90s-assets/car_rental.gif"}
        width={350}
        height={100}
      />

      <div className="grid grid-cols-3 gap-y-[20px] mx-auto">
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
