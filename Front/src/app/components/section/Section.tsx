import React, { ReactNode } from "react";
import * as Styled from "./Section.styles";

function Section({ children }: any) {
  return <Styled.Section>{children}</Styled.Section>;
}

export default Section;
