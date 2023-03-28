import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  return (
    <div className="min-h-[100vh] bg-black">
      <Link href={"/dashboard"}>
        <Image
          className="absolute left-[5%] top-[1%]"
          src={"/assets/90s-assets/back.gif"}
          width={100}
          height={50}
        />
      </Link>
      <Image
        src={"/assets/90s-assets/logo.png"}
        className="mx-auto"
        width={700}
        height={70}
      />
      <h1 className="font-black text-[50px] text-accent--pink text-center">
        THANK YOU FOR VISITNG, LOVE YA!
      </h1>
    </div>
  );
};

export default Checkout;
