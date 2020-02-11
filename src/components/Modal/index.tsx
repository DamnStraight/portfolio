import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { createPortal } from "react-dom";

type Props = {
  children?: React.ReactNode;
  onClose: () => void;
  show: boolean;
  title: string;
};

const Modal: React.FC<Props> = ({ children, onClose, show, title }) => {
  let modalElement = null
  if (typeof document !== 'undefined')
    modalElement = document.getElementById('portal-modal');

  if (!modalElement) return null;

  const content = show ? (
    <OverlayDiv>
      <ModalDiv>
        <div className="w-full text-right pt-2 pr-2">
          <CloseButton onClick={onClose}>x</CloseButton>
        </div>
        <div className="px-4 pb-4">
          <div className="text-2xl text-gray-700 text-center ul-bottom uppercase">
            {title}
          </div>
        </div>
      </ModalDiv>
    </OverlayDiv>
  ) : null;

  return createPortal(content, modalElement);
};

const CloseButton = styled.button`
  ${tw`px-2 py-1 rounded bg-red-500 leading-none`}
  border-bottom: 1px solid #9B2C2C;
  &:hover {
    ${tw`bg-red-700`}
  }

  &:active {
    ${tw`bg-red-900`}
  }
  transition: all 100ms linear;
`;

const OverlayDiv = styled.div`
  ${tw`h-full w-full flex fixed justify-center items-center top-0 left-0 bottom-0 right-0`}
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalDiv = styled.div`
  ${tw`
  relative 
  w-full max-h-full w-4/5 md:w-1/2
  mx-auto 
  bg-white 
  rounded-lg
  shadow-lg
  `}
  z-index: 99;
`;

export default Modal;
