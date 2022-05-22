import { DEFAULT_THEME } from "@/configs/constants";

export type TCardTheme = keyof Pick<typeof DEFAULT_THEME, "grey" | "white">;

export type TCardStyles = {
  isMobile: boolean;
  theme: TCardTheme;
};

export interface IInputProps extends Partial<TCardStyles> {
  isError?: boolean;
  label?: string;
  error?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  defaultValue?: string | number;
  renderLeft?: React.ReactNode;
  renderRight?: React.ReactNode;
}
