import MagnifierIcon from "../../icons/Magnifier";

type TProps = {
  className?: string;
};

const SearchInput = ({ className }: TProps) => {
  return (
    <div className={`${className} relative`}>
      <input
        type="text"
        className="w-full focus:outline-0 bg-searchInputColor text-sm md:text-base rounded-full px-5 py-3"
        placeholder="search ..."
      />
      <button className="absolute text-searchInputColor bg-mutedColor top-[6px] right-[9px] p-1 rounded-full">
        <MagnifierIcon size={23} />
      </button>
    </div>
  );
};

export default SearchInput;
