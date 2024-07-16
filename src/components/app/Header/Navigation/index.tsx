import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import navList from "../../../../data/navList";



type TProps = {
  className?: string
}

const Navigation = ({className}: TProps) => {
  const location = useLocation();

  const pathname = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);

  return (
    <nav className={`${className}`}>
      <ul className="flex items-center gap-x-[60px]">
        {navList?.map((navItem) => (
          <li key={navItem?.title}>
            <Link
              to={navItem?.link}
              className={`${
                navItem?.link == pathname ? "text-primaryColor" : ""
              }`}
            >
              {navItem?.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
