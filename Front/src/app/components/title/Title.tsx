import React from "react";
import * as Styled from "./Title.styles";

interface ITitleProps {
  text: string;
}

function Title(props: ITitleProps) {
  return <Styled.Title>{props.text}</Styled.Title>;
}

export default Title;
