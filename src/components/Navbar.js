import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-[50px] bg-blue-100">
      <div>
        <a href="/">login</a>
      </div>
      <div>
        <Link href="/dashboard">dashboard</Link>
      </div>
      <div>
        <Link href="/cart">cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
