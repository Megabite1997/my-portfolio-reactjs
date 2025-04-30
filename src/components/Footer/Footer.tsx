import { FC } from "react";
import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer: FC = () => {
  return (
    <footer id="contact" className={styles.container}>
      <FontAwesomeIcon icon={faCopyright} className={styles.icon} />
      <label>2025</label>
      <label>Tada Chaipanya</label>
    </footer>
  );
};

export default Footer;
