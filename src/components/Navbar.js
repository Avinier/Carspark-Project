import Image from "next/image";
import Link from "next/link";
import bg from "public/assets/90s-assets/texture4.JPG";
const Navbar = () => {
  return (
    <nav
      className="flex justify-around items-center w-[60%] mx-auto border-dashed border-accent--pink p-[20px] border-[3px] h-[50px] bg-blue-100 mb-[30px]"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
        objectFit: "cover",
      }}
    >
      <div>
        <Link href="/">
          <Image
            src={"/assets/90s-assets/login.gif"}
            width={100}
            height={25}
            alt="Efbet"
          />
        </Link>
      </div>
      <div>
        <Link href="/dashboard">
          <Image
            src={"/assets/90s-assets/home.gif"}
            width={100}
            height={25}
            alt="Efbet"
          />
        </Link>
      </div>
      <div>
        <Link href="/cart">
          <Image
            src={"/assets/90s-assets/cart.gif"}
            width={100}
            height={25}
            alt="Efbet"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
