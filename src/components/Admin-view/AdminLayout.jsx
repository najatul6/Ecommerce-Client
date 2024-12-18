import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Admin Sidebar  */}
      <div className="flex flex-1 flex-col">
        {/* Admin Header  */}
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
