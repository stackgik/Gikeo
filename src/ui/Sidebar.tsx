import Logout from "../features/auth/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Version from "./Version";

const Sidebar = () => {
  return (
    <aside
      className={`grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-6 border-r border-grey-100 bg-grey-0 px-4 py-4 dark:border-dark-grey-100 dark:bg-dark-grey-0`}
    >
      <Logo />
      <MainNav />
      <div className="flex flex-col">
        <Logout />
        <Version />
      </div>
    </aside>
  );
};

export default Sidebar;
