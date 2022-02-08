import { FC } from "react";

import { EButtonSize, EButtonTheme, IButtonProps } from "./models";

import { ButtonWrapper } from "./styles";

const Button: FC<IButtonProps> = ({ children, ...rest }) => (
  <ButtonWrapper {...rest}>{children}</ButtonWrapper>
);

Button.defaultProps = {
  onClick: () => {},
  size: EButtonSize.LARGE,
  theme: EButtonTheme.GREY,
};

export default Button;
