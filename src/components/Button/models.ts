export const enum EButtonSize {
  LARGE = "LARGE",
  MEDUIM = "MEDUIM",
  SMALL = "SMALL",
}

export const enum EButtonTheme {
  GREY = 'GREY',
  YELLOW = 'YELLOW',
  WHITE = 'WHITE',
}

export type TButtonStyles = {
  size?: EButtonSize;
  theme?: EButtonTheme
};

export interface IButtonProps extends TButtonStyles {
  children: React.ReactNode;
  onClick?: () => void;
}
