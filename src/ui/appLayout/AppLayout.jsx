import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../loader/Loader";

function AppLayout() {
  // Page navigation state
  const navigation = useNavigation();
  // Loading state
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
