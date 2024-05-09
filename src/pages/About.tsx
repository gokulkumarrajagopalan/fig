import { FunctionComponent } from "react";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <img className={styles.th1Icon} alt="" src="/th-1@2x.png" />
      <b className={styles.whoAmIContainer}>
        <span className={styles.w}>W</span>
        {`ho am `}
        <span className={styles.w}> I ?</span>
      </b>
      <div className={styles.asYouKnowContainer}>
        <p
          className={styles.asYouKnow}
        >{`As you know my nickname is Gokul, I am a software developer `}</p>
        <p className={styles.asYouKnow}>
          blogger, viedio editor. I make quality content and
        </p>
        <p className={styles.asYouKnow}>{`make money from them. `}</p>
      </div>
      <b className={styles.b}>250,000+</b>
      <b className={styles.videos}>700 + videos</b>
      <b className={styles.mViews}>3M views+</b>
      <div className={styles.socialMediaAudience}>Social media audience</div>
      <div className={styles.editedByMe}>edited by me</div>
      <div className={styles.connectedMyVideos}>connected my videos</div>
      <img className={styles.phvideoBoldIcon} alt="" src="/phvideobold.svg" />
      <img
        className={styles.skillIconsinstagram}
        alt=""
        src="/skilliconsinstagram.svg"
      />
      <img className={styles.raphaelviewIcon} alt="" src="/raphaelview.svg" />
    </div>
  );
};

export default About;
