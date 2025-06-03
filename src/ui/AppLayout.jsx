import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  // eslint-disable-next-line no-unused-vars
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-[500px] h-screen grid-rows-[auto_1fr_auto] bg-stone-200">
      {isLoading && <Loader />}

      <Header></Header>

      <main className="mx-auto max-w-3xl overflow-auto bg-amber-600">
        {/* Pour mettre les nested routes dans le composant */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
