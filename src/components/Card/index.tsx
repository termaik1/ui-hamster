import { FC } from "react";

import { ICardProps } from "./models";
import styles from "./styles";

const Card: FC<ICardProps> = ({
  children,
  className = "",
  isMobile = false,
}) => {
  const classes = styles({ isMobile });

  return <div className={`${classes.root} ${className}`}>{children}</div>;
};

export default Card;
