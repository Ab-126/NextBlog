import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© Blogged. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src={"/1 .png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Blogged facebook account"
        />
        <Image
          src={"/2 .png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Blogged"
        />
        <Image
          src={"/3 .png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Blogged"
        />
        <Image
          src={"/4.png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Blogged"
        />
      </div>
    </div>
  );
};

export default Footer;
