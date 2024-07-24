import TInput from "../../../../types/input";

interface TTextInput extends TInput {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
}

const TextInput = ({
  formik,
  name,
  type,
  label,
  //   value,
  id,
  placeholder,
  className,
}: TTextInput) => {
  return (
    <label htmlFor={id} className={`flex flex-col gap-y-2 ${className}`}>
      {label && (
        <span className="text-sm text-mutedColor cursor-pointer">{label}</span>
      )}
      <div className="">
        <input
          type={type}
          // value={value}
          id={id}
          {...formik.getFieldProps(name)}
          placeholder={placeholder}
          className="w-full text-titleColor bg-inputBgColor rounded-lg focus:outline-0 px-5 py-2"
        />
        {formik?.errors[name] && (
          <div className="flex flex-col gap-y-1 mt-1.5">
            <span className="text-red-400 text-xs">
              {formik?.errors[name]}
            </span>
          </div>
        )}
      </div>
    </label>
  );
};

export default TextInput;
{
}
