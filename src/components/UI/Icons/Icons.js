import { BsPersonFill, BsEnvelopeAtFill, BsPhoneFill } from "react-icons/bs";

import React from "react";

export const Person = (props) => {
  return <BsPersonFill className={`icon-general ${props.className}`} />;
};

export const Envelope = (props) => {
  return <BsEnvelopeAtFill className={`icon-general ${props.className}`} />;
};

export const Mobile = (props) => {
  return <BsPhoneFill className={`icon-general ${props.className}`} />;
};
