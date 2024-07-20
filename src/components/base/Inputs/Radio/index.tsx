import TInput from "../../../../types/input";

interface TRadioInput extends TInput {
  id: string;
}

const RadioInput = ({
  formik,
  id,
  name,
  value,
  label,
  className,
}: TRadioInput) => {
  return (
    <label
      htmlFor={value}
      className={`cursor-pointer flex gap-x-2 items-center ${className}`}
    >
      <input
        type="radio"
        className={`accent-primaryColor w-4 h-4`}
        name={name}
        id={value}
        value={value}
        onClick={() => {
          formik.setFieldValue(name, value);
        }}
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioInput;
