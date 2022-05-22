import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createTheme";
import { TCardStyles } from "./models";

import configTheme from "@/configs/theme";

const { colors } = configTheme;

export default makeStyles<Theme, TCardStyles>((theme) =>
  createStyles({
    root: {
      padding: ({ isMobile }) => (isMobile ? 8 : 16),
      boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.15)",
      borderRadius: 5,
    },
  })
);
