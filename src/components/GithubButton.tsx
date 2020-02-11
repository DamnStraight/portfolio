import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import GithubIcon from "./../assets/github.inline.svg";

type Props = {
}

const IconButton: React.FC = () => {
  return (
    <>
      <div 
        className=" cursor-pointer transition-colors bg-blue-500 hover:bg-blue-700 duration-100 ease-linear rounded-full text-center text-white fill-current flex justify-center items-center font-bold text-base px-4 my-1 leading-none "
      >
        {/* {React.cloneElement(icon, { className: "w-4 h-4 mr-1 inline-block"})} */}
        {/* <Icon className="w-4 h-4 mr-1 inline-block" /> */}
        <GithubIcon className="w-4 h-4 mr-1 inline-block" />
        REPO
      </div>
    </>
  );
};

export default IconButton;
