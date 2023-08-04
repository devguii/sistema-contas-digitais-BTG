import React from "react";
import * as Styled from "./Card.style";

function Card({ children }: any) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default Card;
