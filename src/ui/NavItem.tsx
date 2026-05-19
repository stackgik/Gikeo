import { ComponentType, SVGAttributes } from "react";
import { NavLink } from "react-router-dom";
import { useMenuToggle } from "../context/MenuToggleContext";

interface INavItems {
  to: string;
  label: string;
  Icon: ComponentType<SVGAttributes<SVGElement>>;
}

const NavItem = ({ to, label, Icon }: INavItems) => {
  const { setIsSidebarOpen } = useMenuToggle();

  return (
    <li>
      <NavLink
        to={to}
        onClick={() => setIsSidebarOpen(false)}
        className={({ isActive }) =>
          `navlink group transition-all duration-200 ease-in-out ${
            isActive
              ? "bg-brand-500/10 text-brand-500"
              : "text-grey-600 hover:bg-grey-100 dark:text-dark-grey-600 dark:hover:bg-dark-grey-100"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                isActive
                  ? "text-brand-500"
                  : "text-grey-500 group-hover:text-brand-500 dark:text-dark-grey-500"
              }`}
            />
            <span>{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
