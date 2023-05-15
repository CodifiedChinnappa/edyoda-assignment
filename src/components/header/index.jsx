import logo from "../../assets/edyoda-logo.png";
import { menuItems } from "../../data/menu";

const Right = () => {
  return (
    <div className="flex items-center space-x-[70px]">
      <img
        src={logo}
        className="w-[158px] h-[45px] cursor-pointer"
        alt="edyoda"
      />
      <ul className="flex space-x-[70px]">
        {menuItems.map((item) => (
          <li
            className="flex  items-center list-none text-dark  font-medium leading-[18.78px] cursor-pointer hover:opacity-[0.6]"
            key={item.title}
          >
            {item.title} &nbsp;
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91 0.580078L6.5 5.17008L11.09 0.580078L12.5 2.00008L6.5 8.00008L0.5 2.00008L1.91 0.580078Z"
                fill="black"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Left = () => {
  return (
    <div className="flex items-center space-x-[64px] font-[16px] leading-[19px] text-[black]">
      <h3 className="cursor-pointer ">&#x1F50E;&#xFE0E;</h3>
      <h6 className="cursor-pointer font-medium hover:opacity-[0.6]">Log in</h6>
      <button id="signup-button" className="cursor-pointer hover:opacity-[0.8]">
        JOIN NOW
      </button>
    </div>
  );
};

const index = () => {
  return (
    <nav className=" flex justify-between h-[72px] w-[1920px] py-[24px] px-[80px] bg-white">
      <Right />
      <Left />
    </nav>
  );
};

export default index;
