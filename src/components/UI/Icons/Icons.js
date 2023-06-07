import React from "react";

import {
  BsPersonFill,
  BsEnvelopeAtFill,
  BsPhoneFill,
  BsArrowLeftSquare,
  BsArrowRightSquare,
} from "react-icons/bs";

export const Person = (props) => {
  return <BsPersonFill className={`icon-general ${props.className}`} />;
};

export const Envelope = (props) => {
  return <BsEnvelopeAtFill className={`icon-general ${props.className}`} />;
};

export const Mobile = (props) => {
  return <BsPhoneFill className={`icon-general ${props.className}`} />;
};

export const LeftArrow = (props) => {
  return <BsArrowLeftSquare className={`icon-general ${props.className}`} />;
};

export const RightArrow = (props) => {
  return <BsArrowRightSquare className={`icon-general ${props.className}`} />;
};
