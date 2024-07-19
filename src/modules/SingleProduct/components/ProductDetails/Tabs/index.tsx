import { useState } from "react";

type TProps = {
  className?: string;
  ingredients: string[];
  instructions: string[];
};

const TabsProduct = ({ ingredients, instructions, className }: TProps) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={`text-mutedColor ${className}`}>
      <div role="tablist" className="tabs tabs-bordered w-full md:w-6/12">
        <a
          role="tab"
          className={`tab text-mutedColor ${activeTab == 1 && "tab-active"}`}
          onClick={() => setActiveTab(1)}
        >
          Ingredients
        </a>
        <a
          role="tab"
          className={`tab text-mutedColor ${activeTab == 2 && "tab-active"}`}
          onClick={() => setActiveTab(2)}
        >
          Instructions
        </a>
      </div>
      <div className="w-full md:w-6/12 ml-5 mt-4 text-sm md:text-base">
        {activeTab == 1 ? (
          <ul className="list-disc flex flex-col gap-y-1.5">
            {ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <ul className="list-decimal flex flex-col gap-y-2">
            {instructions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TabsProduct;
