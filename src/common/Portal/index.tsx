import { FC } from "react";
import ReactDOM from "react-dom";

import { IPortalProps } from "./models";

const Portal: FC<IPortalProps> = ({ children, elementRoot = "" }) => {
  const domNode = (
    elementRoot
      ? document.getElementById(elementRoot)
      : document.createElement("div")
  ) as HTMLElement;

  return ReactDOM.createPortal(children, domNode);
};

export default Portal;
