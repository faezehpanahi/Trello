import React from "react";
import ContainerFeature from "./ContainerMid/ContainerFeature";
import ContainerMide from "./ContainerMid/ContainerMide";
import ContainerTop from "./ContainerTop/ContainerTop";

const Container = () => {
  return (
    <div>
      <ContainerTop />
      <ContainerFeature />
      <ContainerMide />
    </div>
  );
};

export default Container;
