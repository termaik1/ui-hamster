import { DEFAULT_SIZE } from "@/configs/constants";

type TValueItem = string | number;

export const getSizeValue = (
  size: keyof typeof DEFAULT_SIZE,
  values: [TValueItem, TValueItem, TValueItem]
) => {
  if (size === "large") {
    return values[0];
  }
  if (size === "medium") {
    return values[1];
  }

  return values[2];
};
