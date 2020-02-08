import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

type Props = {
  children?: React.ReactNode;
  onClose: () => void;
  show: boolean;
};

const Modal: React.FC<Props> = ({ children, onClose, show }) => {
  return show ? (
    <OverlayDiv>
      <ModalDiv>
        <div><button onClick={onClose}>HAHAA</button></div>
        <div className="p-6">{children}</div>
      </ModalDiv>
    </OverlayDiv>
  ) : null;
};

const OverlayDiv = styled.div`
  ${tw`h-full w-full flex fixed justify-center items-center top-0 left-0 bottom-0 right-0`}
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalDiv = styled.div`
  ${tw`relative w-full mx-auto max-h-full max-w-sm bg-white rounded-sm`}
  z-index: 99;
`;

export default Modal;
