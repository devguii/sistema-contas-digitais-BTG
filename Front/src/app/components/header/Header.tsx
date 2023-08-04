import React from "react";
import * as Styled from "./Header.styles";
function Header() {
  return (
    <div>
      <Styled.Header>
        <img
          src="https://ci5.googleusercontent.com/proxy/z_PaoqtFZyPka3s3v3IP1e18uwMYIqNN5yKRFAp9fKAQ_RNTFHr1rWfE0cqJWNLeMRltVsCy6G12KeTbIFfqXnPfWH-uK6SuAIzrFQ=s0-d-e1-ft#https://static.btgpactual.com/media/header-greenhouse.png"
          style={{
            height: "100%",
            width: "80%",
          }}
        ></img>
      </Styled.Header>
    </div>
  );
}

export default Header;
