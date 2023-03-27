import Link from "next/link";
import Image from "next/image";
import CarCard from "./CarCard";

const CarDashboard = (props) => {
  const DATA = props.cardata;

  return (
    <section className="border-[3px] w-[65%] pl-[30px] py-[30px]  mx-auto border-dashed">
      <Image src={"/assets/90s-assets/motor.gif"} width={100} height={100} />
      <Image src={"/assets/90s-assets/flagm.gif"} width={100} height={100} />
      <Image
        src={"/assets/90s-assets/car_classic.gif"}
        width={300}
        height={50}
      />
      <Image
        src={"/assets/90s-assets/car_rental.gif"}
        width={300}
        height={50}
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
