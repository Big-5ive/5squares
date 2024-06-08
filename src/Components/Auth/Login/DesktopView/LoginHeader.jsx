import React from "react";
import PropTypes from "prop-types";
import logo from "/images/5square_Logo.jpg";
import { Wrapper } from "../../../Container/Container";

const LoginHeader = ({ identityVerification, links, style }) => {
  return (
    <header className="w-full h-20 flex justify-between items-center px-4" style={style}>
     <div className="w-11/12 h-full flex justify-between items-center px-4   text-3xl font-bold ">
     <div className="h-20 flex items-center w-[60%]">
        <div className="h-[70%] w-[40%]">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        {identityVerification && (
          <div className="text-3xl font-normal w-[60%] text-[#333]">
            {identityVerification}
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="text-sm font-medium text-gray-500 hover:text-black">
            {link.text}
          </a>
        ))}
      </div>
     </div>
    </header>
  );
};

LoginHeader.propTypes = {
  identityVerification: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LoginHeader;



// import React from "react";
// import logo from "/images/5square_Logo.jpg"

// const LoginHeader = () => {
//   return (
//     <header className="w-full h-20 flex-center ">
//       <div className="w-11/12 h-full text-3xl font-bold flex items-center ">
//       <div className="h-[70%] w-[30%] ">
//        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
//        </div>
//       </div>
//     </header>
//   );
// };

// export default LoginHeader;
