import { useRef } from "react";

const Input = ({ data, totalSum }) => {
  const { title, total, perMonth, type, status } = data;
  const inputRef = useRef();
  return (
    <div
      //ternary operator to dynamically change selected plan background
      className={`flex items-center p-[18.67px] gap-[14.57px] isolate w-[501px] h-[65px] border-solid ${
        !status === true
          ? "bg-[#E7E7E7]  text-[#BEBEBE]"
          : inputRef?.current?.checked
          ? "bg-[#D7EDDD]"
          : null
      }  border-2 border-[#47BA68] rounded-[4px] self-stretch order-1 `}
    >
      <input
        className="w-[2.5rem] h-[2.5rem] "
        type="radio"
        name="test"
        id={`${title}${total}`}
        disabled={!status && true}
        ref={inputRef}
        //having difficulty in setting name property so hard codding
        onClick={() => {
          totalSum(total);
          // console.log(inputRef.current.checked);
        }}
      />
      <label
        className="font-sans font-semibold text-[16px] leading-[120%] cursor-pointer w-full relative"
        htmlFor={`${title}${total}`}
      >
        <div
          //ternary operator to dynamically select the recommend plans
          className={`${
            type === "expired"
              ? "subscription-notification-expired"
              : type === "recommended"
              ? "subscription-notification"
              : null
          } flex justify-between`}
        >
          <div>{title}</div>
          <div>
            <sup className="flex absolute right-0 top-[5px] gap-[8px]">
              <p className="font-sans font-normal text-[12px]  text-center">
                Total
              </p>
              <p className="font-sans font-semibold text-[16px]   text-center">
                ₹{total}
              </p>
            </sup>
            <sub className="flex absolute right-0 top-5 gap-[8px]">
              <p className="font-sans font-normal text-[12px]   text-center">
                ₹{perMonth}
              </p>
              <p className="font-sans font-[500] text-[10px]  text-[#BEBEBE] text-center">
                /mo
              </p>
            </sub>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Input;
