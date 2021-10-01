import React from "react";
import cx from "classnames";

import styles from "./badge.module.scss";

interface BadgeProps {
  badge: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ badge, className }) => {
  return (
    <img src={badge} alt="badge" className={cx(styles.badgeImage, className)} />
  );
};

export default Badge;
