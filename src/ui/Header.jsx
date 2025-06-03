import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-black-300 flex items-center justify-between border-b-1 bg-yellow-500 px-2 py-2 uppercase sm:p-5">
      <Link className="tracking-wider sm:tracking-[.5rem]" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
