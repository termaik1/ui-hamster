import { FC, useState } from "react";
import Grid from "@material-ui/core/Grid";

import { IFieldsetProps } from "./models";
import styles from "./styles";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Fieldset: FC<IFieldsetProps> = ({
  title,
  isOpen = null,
  className = "",
  onClick = () => {},
  children,
}) => {
  const classes = styles();
  const [isVisible, setIsVisible] = useState(typeof isOpen === "boolean");

  const toggleIsVisible = () => setIsVisible((isPrev) => !isPrev);

  const handkeClickTitle = () => {
    onClick();
    toggleIsVisible();
  };

  const renderIcon = isVisible ? (
    <KeyboardArrowUpIcon />
  ) : (
    <KeyboardArrowDownIcon />
  );

  return (
    <div className={className}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        onClick={handkeClickTitle}
      >
        {title}
        {renderIcon}
      </Grid>
      {isVisible && <div className={classes.content}>{children}</div>}
    </div>
  );
};

export default Fieldset;
