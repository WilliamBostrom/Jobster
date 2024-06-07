import { Outlet } from "react-router-dom";
import { Big, BigSidebar, Navbar, SmallSidebar } from "../../components/index";

import Wrapper from "../../assets/wrappers/SharedLayout";
function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
