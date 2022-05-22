import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createTheme";

import { TButtonStyles } from "./models";
import { getSizeValue } from "@/utils/get.size.value.util";

import configTheme from "@/configs/theme";

const { colors } = configTheme;

export default makeStyles<Theme, TButtonStyles>((theme) =>
  createStyles({
    root: {
      height: ({ size }) => getSizeValue(size, [40, 34, 24]),
      paddingLeft: ({ size }) => getSizeValue(size, [24, 16, 12]),
      paddingRight: ({ size }) => getSizeValue(size, [24, 16, 12]),
      borderRadius: 10,

      background: ({ theme }) =>
        theme === "grey"
          ? colors.grey
          : theme === "yellow"
          ? colors.yellow
          : colors.white,
      border: ({ theme }) =>
        theme === "white" ? `1px solid ${colors.black}` : 0,
    },
  })
);
