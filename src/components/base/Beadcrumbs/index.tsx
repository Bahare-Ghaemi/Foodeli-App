import { Link } from "react-router-dom";

type TProps = {
  prevLink: string;
  currTitle: string;
  className?: string
};

const Breadcrumbs = ({ prevLink, currTitle, className }: TProps) => {
  return (
    <div className={`breadcrumbs text-sm ${className}`}>
      <ul className="flex gap-y-2 flex-wrap md:flex-nowrap z-0">
        {prevLink == "home" ? (
          <>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>{currTitle}</li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>shop</Link>
            </li>
            <li>{currTitle}</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
