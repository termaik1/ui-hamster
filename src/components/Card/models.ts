import React from "react";

export type TCardStyles = {
    isMobile: boolean
}

export interface ICardProps extends Partial<TCardStyles> {
  children: React.ReactNode;
  className?: string;
}
