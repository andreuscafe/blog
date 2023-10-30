import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute top-4 left-4 z-10">
      <Link href="/" className="hover:underline">
        Volver
      </Link>
    </div>
  );
};

export default Header;
