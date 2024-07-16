import MagnifierIcon from "../../icons/Magnifier";

type TProps = {
    className?: string
}

const SearchBtn = ({className}: TProps) => {
    return ( 
        <button className={`text-titleColor ${className}`}>
            <MagnifierIcon/>
        </button>
     );
}
 
export default SearchBtn;