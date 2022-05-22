import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

import configTheme from "@/configs/theme";

export default makeStyles((theme) =>
  createStyles({
    item: {
      padding: "4px 8px 4px 8px",
      display: "flex",
      borderRadius: 5,
    },
    element: {
      marginLeft: 8,
    },
    active: {
      background: configTheme.colors.grey,
    },
    hover: {
      cursor: "pointer",
      "&:hover": {
        color: configTheme.colors.red,
      },
    },
  })
);
