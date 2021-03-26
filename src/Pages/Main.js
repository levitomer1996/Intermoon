import React from "react";
import Fallingstars from "../Components/FallingStars/Fallingstars";
import IndexPage from "./IndexPage.js/IndexPage";

const Main = () => {
  return (
    <div>
      {" "}
      <Fallingstars>
        <IndexPage />
      </Fallingstars>
    </div>
  );
};

export default Main;
