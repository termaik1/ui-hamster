import { FC } from "react";
import Grid from "@material-ui/core/Grid";

import { IInputProps } from "./models";
import styles from "./styles";

const Input: FC<IInputProps> = ({
  isError = false,
  label = "",
  error = "",
  className = "",
  isMobile = false,
  theme = "grey",
  renderLeft,
  renderRight,
  ...rest
}) => {
  const classes = styles({ isMobile, theme });

  const renderElementLeft = renderLeft && (
    <div className={classes.iconLeft}>{renderLeft}</div>
  );
  const renderElementRight = renderRight && (
    <div className={classes.iconRight}>{renderRight}</div>
  );

  return (
    <Grid
      container
      direction="column"
      className={`${classes.root} ${className}`}
    >
      {label && <label className={classes.label}>{label}</label>}
      <Grid container alignItems="center">
        {renderElementLeft}
        <input className={classes.input} {...rest} />
        {renderElementRight}
      </Grid>
      {isError && <span className={classes.error}>{error}</span>}
    </Grid>
  );
};

export default Input;
