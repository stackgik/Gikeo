import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/dashboard"} className="mx-auto block pb-4 pt-2 text-center">
      <img
        src="/new_logo.png"
        alt="Logo"
        className="h-[60px] w-auto transition-opacity duration-200 hover:opacity-80 PC:h-[50px] tablet:h-[44px]"
      />
    </Link>
  );
};

export default Logo;
