import RiseVestLogo from "../../assets/svgs/rise-logo.svg?react";
import DefaultLayout from "../default-layout";

const Topbar = () => {
  return (
    <nav className="bg-white py-10 sticky top-0 z-10">
      <DefaultLayout>
        <RiseVestLogo />
      </DefaultLayout>
    </nav>
  );
};

export default Topbar;
