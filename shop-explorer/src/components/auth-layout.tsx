import { Outlet } from "react-router-dom";
import Navbar from "./layout/navbar/navbar";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <div className="w-full max-w-300 mt-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
