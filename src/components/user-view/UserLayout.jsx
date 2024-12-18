import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";

function UserLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <UserHeader/>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
