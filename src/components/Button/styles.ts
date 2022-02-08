import styled from "styled-components";

import { TButtonStyles, EButtonSize, EButtonTheme } from "./models";
import themeUI from "@/configs/theme";

const ButtonWrapper = styled.button<TButtonStyles>`
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${themeUI.colors.black};
  color: ${themeUI.colors.black};

  ${({ size }) => size === EButtonSize.LARGE && `padding: 12px 20px`};
  ${({ size }) => size === EButtonSize.MEDUIM && `padding: 8px 16px`};
  ${({ size }) => size === EButtonSize.SMALL && `padding: 4px 8px`};

  ${({ theme }) =>
    theme === EButtonTheme.GREY && `background: ${themeUI.colors.grey}`};
  ${({ theme }) =>
    theme === EButtonTheme.WHITE && `background: ${themeUI.colors.white}`};
  ${({ theme }) =>
    theme === EButtonTheme.YELLOW && `background: ${themeUI.colors.yellow}`};
`;

export { ButtonWrapper };
