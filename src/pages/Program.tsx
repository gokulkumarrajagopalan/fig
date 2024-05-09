import { FunctionComponent } from "react";
import styles from "./Program.module.css";

const Program: FunctionComponent = () => {
  return (
    <div className={styles.program}>
      <b className={styles.whatAwaitsYou}>{`What awaits you ? `}</b>
      <div className={styles.plate1Parent}>
        <div className={styles.plate1}>
          <div className={styles.plate11} />
          <b className={styles.forHom}>For hom ?</b>
          <img
            className={styles.ioncameraSharpIcon}
            alt=""
            src="/ioncamerasharp.svg"
          />
          <div className={styles.newDomainNameContainer}>
            <p className={styles.newDomainName}>new domain name</p>
            <p className={styles.newDomainName}>{`,you can set cookies on `}</p>
            <p className={styles.newDomainName}>{`that domain within the `}</p>
            <p className={styles.newDomainName}>boundaries</p>
          </div>
        </div>
        <div className={styles.plate1}>
          <div className={styles.plate11} />
          <b className={styles.whatItGives}>{`what it gives `}</b>
          <img
            className={styles.ioncameraSharpIcon}
            alt=""
            src="/ioncamerasharp.svg"
          />
          <div className={styles.newDomainNameContainer}>
            <p className={styles.newDomainName}>new domain name</p>
            <p className={styles.newDomainName}>{`,you can set cookies on `}</p>
            <p className={styles.newDomainName}>{`that domain within the `}</p>
            <p className={styles.newDomainName}>boundaries</p>
          </div>
        </div>
        <div className={styles.plate1}>
          <div className={styles.plate11} />
          <b className={styles.experience}>Experience</b>
          <img
            className={styles.ioncameraSharpIcon}
            alt=""
            src="/ioncamerasharp.svg"
          />
          <div className={styles.newDomainNameContainer}>
            <p className={styles.newDomainName}>new domain name</p>
            <p className={styles.newDomainName}>{`,you can set cookies on `}</p>
            <p className={styles.newDomainName}>{`that domain within the `}</p>
            <p className={styles.newDomainName}>boundaries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
