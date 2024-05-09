import { FunctionComponent } from "react";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <img
        className={styles.pexelsPhotoByPixabay}
        alt=""
        src="/pexels-photo-by-pixabay@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.mainParent}>
          <div className={styles.main}>Main</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
          <div className={styles.signup}>SignUp</div>
        </div>
        <div className={styles.steveEditor}>Steve Editor</div>
      </div>
      <div className={styles.riinstagramFillParent}>
        <img
          className={styles.riinstagramFillIcon}
          alt=""
          src="/riinstagramfill.svg"
        />
        <img
          className={styles.riinstagramFillIcon}
          alt=""
          src="/mingcutetwitterfill.svg"
        />
        <img
          className={styles.riinstagramFillIcon}
          alt=""
          src="/icbaselinewhatsapp.svg"
        />
      </div>
      <div className={styles.editLikeProParent}>
        <div className={styles.editLikePro}>{`Edit Like Pro `}</div>
        <div className={styles.andMakeMoney}>{`And Make Money `}</div>
        <div className={styles.buyANewContainer}>
          <p
            className={styles.buyANew}
          >{`         Buy a new domain name, you can set cookies on `}</p>
          <p
            className={styles.thatDomainWithin}
          >{`that domain within the boundaries of its security policies. `}</p>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.order}>Order</b>
        </div>
        <img className={styles.mdiarrowIcon} alt="" src="/mdiarrow@2x.png" />
        <div className={styles.orderFromHereContainer}>
          <p className={styles.thatDomainWithin}>{`order `}</p>
          <p className={styles.thatDomainWithin}>from here</p>
        </div>
        <img className={styles.frameChild} alt="" src="/group-4@2x.png" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.photoshop}>PHOTOSHOP</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.deviconpremierepro}
          alt=""
          src="/deviconpremierepro.svg"
        />
      </div>
      <img className={styles.desktop1Item} alt="" src="/group-2@2x.png" />
    </div>
  );
};

export default Desktop;
