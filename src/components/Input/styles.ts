import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createTheme";
import { TCardStyles } from "./models";

import configTheme from "@/configs/theme";

const { colors } = configTheme;

export default makeStyles<Theme, TCardStyles>((theme) =>
  createStyles({
    root: {
      padding: ({ isMobile }) =>
        isMobile ? "6px 8px 6px 8px" : "8px 12px 8px 12px",
      borderRadius: 10,
      border: ({ theme }) =>
        theme === "white" ? `1px solid ${colors.yellow}` : 0,
      background: ({ theme }) =>
        theme === "grey" ? colors.grey : colors.white,
    },
    input: {
      outline: "none",
      border: "none",
      background: ({ theme }) =>
        theme === "grey" ? colors.grey : colors.white,
      color: ({ theme }) => (theme === "white" ? colors.black : colors.white),
    },
    label: {
      fontSize: ({ isMobile }) => (isMobile ? 14 : 16),
      lineHeight: ({ isMobile }) => (isMobile ? "12px" : "20px"),
      marginBottom: ({ isMobile }) => (isMobile ? 4 : 8),
    },
    iconLeft: {
      marginRight: 8,
    },
    iconRight: {
      marginLeft: 8,
    },
    error: {
      fontSize: ({ isMobile }) => (isMobile ? 14 : 16),
      lineHeight: ({ isMobile }) => (isMobile ? "12px" : "20px"),
      marginTop: 4,
      color: colors.red,
    },
  })
);
