import { FC } from "react";
import cn from "classnames";

import { IMenuProps } from "./models";
import styles from "./styles";

const Menu: FC<IMenuProps> = ({ items = [], className = "" }) => {
  const classes = styles();
  return (
    <div className={className}>
      {items.map(({ icon, element, onClick, isActive }) => (
        <div
          onClick={onClick}
          className={cn(classes.item, {
            [classes.active]: isActive,
            [classes.hover]: !isActive
          })}
        >
          {icon}
          <div className={classes.element}>{element}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
