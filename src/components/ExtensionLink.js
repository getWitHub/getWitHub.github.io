import React from "react";
import { browserName } from "react-device-detect";

const TypeformLink = () => {
  console.log(browserName);
  var chromeLink = "https://withub.typeform.com/to/dOTkG3oa";
  var firefoxLink = "https://withub.typeform.com/to/BkcZIGPE";
  if (browserName === "Firefox") {
    return firefoxLink;
  } else {
    return chromeLink;
  }
};
export default TypeformLink;
