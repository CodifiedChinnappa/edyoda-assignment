import { useState } from "react";
import Input from "./input";
import razorpay from "../../assets/razorpay.png";
import { subscription } from "../../data/menu";

const index = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  // a callback function to select the plan
  const totalSum = (value) => {
    setSelectedValue(value);
  };

  // function to calculate the final sum
  const finalSum = () => {
    const discount = Number(18500) - Number(18401);
    return Number(discount) - Number(selectedValue);
  };

  return (
    <div className="flex flex-col items-center py-[32px] px-[24px] gap-[28px] bg-white rounded-[8px] absolute w-[549px] left-[1269px] top-[70px]">
      <div className="flex w-full justify-around">
        <div className="flex flex-col items-center">
          <span className="w-[38px] h-[38px] bg-[#0096FF] rounded-[1000px] font-sans font-semibold text-[24px] text-center  text-white">
            1
          </span>
          <p className="font-sans font-normal text-[16px] leading-[19px] tracking-[0.01em] text-[#3C4852]">
            Sign Up
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-[38px] h-[38px] bg-[#0096FF] rounded-[1000px] font-sans font-semibold text-[24px] text-center  text-white">
            1
          </span>
          <p className="font-sans font-normal text-[16px] leading-[19px] tracking-[0.01em] text-[#3C4852]">
            Subscribe
          </p>
        </div>
      </div>
      <h3 className="font-sans font-semibold text-[24px] leading-[30px] text-center text-[#3C4852]">
        Select your subscription plan
      </h3>
      {/* // list of subscription plans */}
      <div className="flex flex-col gap-[16px]">
        {subscription.map((data, index) => (
          <Input data={data} totalSum={totalSum} key={index} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center py-[16px] px-[24px] gap-[14px] bg-white w-full  border-t-2 border-[#BEBEBE]">
        <div className="flex justify-between w-full">
          <p className="font-sans font-normal text-[16px] leading-[19px] text-[#3C4852]">
            Subscription Fee
          </p>
          <p className="font-sans font-medium text-[16px] leading-[16px] tracking-[0.03em] text-[#3C4852]">
            ₹18,500
          </p>
        </div>
        {/* // Limited time offer */}
        <div className="alert-gradient flex  flex-col items-start  w-[501px] h-[76px]">
          <div className="alert-fill  box-border w-full px-[24px] py-[12px] gap-[4px] space-y-[10px] text-[#DE4313]">
            <div className="flex justify-between">
              <p className="font-sans font-semibold text-[16px] leading-[19px]">
                Limited time offer
              </p>
              <p className="font-sans font-semibold text-[16px] leading-[16px] tracking-[0.03em] text-[#3C4852]">
                - ₹18,401
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6667 17.3333V37.3333L48 47.6666L50.6667 43.6666L35.6667 34.6666V17.3333H30.6667ZM60.6667 34V54H67.3334V34H60.6667ZM60.6667 60.6666V67.3333H67.3334V60.6666H60.6667ZM54 60.6666C48.3334 65 41.6667 67.3333 34 67.3333C15.6667 67.3333 0.666687 52.3333 0.666687 34C0.666687 15.6666 15.6667 0.666626 34 0.666626C50 0.666626 63.6667 12 66.6667 27.3333H59.6667C56.6667 16 46.3334 7.33329 34 7.33329C19.3334 7.33329 7.33335 19.3333 7.33335 34C7.33335 48.6666 19.3334 60.6666 34 60.6666C42 60.6666 49 57 54 51.6666V60.6666Z"
                  fill="#DE4313"
                />
              </svg>

              <div className="font-sans font-normal text-[16px] leading-[17px] tracking-[0.03em] text-[#DE4313]">
                Offer valid till 25th March 2023
              </div>
            </div>
          </div>
        </div>
        {/* // sum of total section */}
        <div className="flex justify-between w-full">
          <p className="font-semibold  text-[16px] leading-[19px] text-[#3C4852] ">
            <strong>Total</strong> (Incl. of 18% GST)
          </p>
          <p className="font-sans font-bold text-[24px] leading-[24px] tracking-[0.03em] text-[#3C4852]">
            ₹{selectedValue ? finalSum() : ""}
          </p>
        </div>
      </div>
      {/* //action button */}
      <div className="flex w-full  gap-[10px]">
        <button className="px-[10px] py-[18.5px]  w-[549px] font-sans font-bold text-[16px] leading-[19px] capitalize border-2 border-[#F77171] rounded-[4px]   bg-white text-[#F77171]">
          CANCEL
        </button>
        <button
          className="px-[10px] py-[18.5px] w-[549px]   font-sans font-bold text-[16px] leading-[19px] capitalize rounded-[4px]  bg-[#47BA68] text-white hover:opacity-[0.8]"
          onClick={() => {
            if (!selectedValue) alert("Please select an option to continue.");
          }}
        >
          PROCEED TO PAY
        </button>
      </div>
      {/* //payment gateway */}
      <div className="w-full flex items-start">
        <img src={razorpay} alt="razorpay" />
      </div>
    </div>
  );
};

export default index;
