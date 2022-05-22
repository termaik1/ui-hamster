import { FC } from "react";

import { IButtonProps } from "./models";
import ButtonBase from "@material-ui/core/ButtonBase";

import styles from "./styles";

const Button: FC<IButtonProps> = ({
  children,
  size = "large",
  theme = "grey",
  ...rest
}) => {
  const classes = styles({ size, theme });

  return (
    <ButtonBase className={classes.root} {...rest}>
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
