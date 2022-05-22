import { DEFAULT_SIZE, DEFAULT_THEME } from "@/configs/constants";
import { ButtonBaseProps } from "@material-ui/core/ButtonBase";

export type TButtonTheme = keyof Pick<
  typeof DEFAULT_THEME,
  "grey" | "yellow" | "white"
>;

export type TButtonStyles = {
  size: keyof typeof DEFAULT_SIZE;
  theme: TButtonTheme;
};

export interface IButtonProps extends Partial<TButtonStyles>, ButtonBaseProps {
  children: React.ReactNode;
}
