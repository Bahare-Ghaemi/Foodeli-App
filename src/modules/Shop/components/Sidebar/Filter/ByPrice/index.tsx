import { useFormik } from "formik";
import RadioInput from "../../../../../../components/base/Inputs/Radio";
import { useEffect } from "react";
import { useShopStore } from "../../../../store";

const FilterByPrice = () => {
  const { productList, setProductList } = useShopStore();

  const formik = useFormik({
    initialValues: {
      filter: "",
    },
    onSubmit: (value) => console.log(value),
  });

  const filterByPrice = (type: "inc" | "dec") => {
    switch (type) {
      case "inc":
        setProductList(productList?.sort((a, b) => a.userId - b.userId));
        break;
      case "dec":
        setProductList(productList?.sort((a, b) => b.userId - a.userId));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (formik?.values?.filter) {
      case "inc":
        filterByPrice("inc");
        break;
      case "dec":
        filterByPrice("dec");
        break;
      default:
        break;
    }
  }, [formik?.values?.filter]);

  return (
    <div className="collapse collapse-arrow border-b border-primaryColor rounded-none">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title p-0 flex items-center text-primaryColor">
        Filter by Price
      </div>
      <div className="collapse-content p-0">
        <form className="flex flex-col gap-y-2">
          <RadioInput
            formik={formik}
            id="inc"
            name="filter"
            value="inc"
            label="least to most"
          />
          <RadioInput
            formik={formik}
            id="dec"
            name="filter"
            value="dec"
            label="most to least"
          />
        </form>
      </div>
    </div>
  );
};

export default FilterByPrice;
