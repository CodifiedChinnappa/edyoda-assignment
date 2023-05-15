import { heroData } from "../../data/menu";

const index = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-[64px] absolute w-[799px] h-[708px] left-[144px] top-[72px]">
      <span>
        <h1 className="h-[70px] text-[56px] font-semibold leading-[70px] tracking-[-0.0.1em] text-white">
          Access curated courses worth
        </h1>
        <span className="flex  h-[70px]  text-[56px] font-semibold leading-[80px]  text-white gap-[12px] ">
          ₹
          <h1 className="line-through decoration-[#DE4313] font-sans leading-[70px] text-[64px]">
            18,500
          </h1>
          at just
          <span className="font-sans text-[#0096FF] leading-[70px] text-[56px]">
            ₹ 99
          </span>
          per year!
        </span>
      </span>
      <div className="flex flex-col space-y-[48px]">
        {/* //lists the benefits of the subscription */}
        {heroData.map((item, index) => (
          <div className="flex gap-[68px] items-center" key={index}>
            <img
              src={item.icon}
              className="w-[58px] h-[58px]"
              alt=""
              key={item.title}
            />
            <div dangerouslySetInnerHTML={{ __html: item.title }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
