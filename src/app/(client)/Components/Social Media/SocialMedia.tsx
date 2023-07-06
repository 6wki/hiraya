import InstagramPosts from "./InstagramPosts/InstagramPosts";
import Reviews from "./Slideshow/Reviews";
import styles from "./socialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className="containerAdjust">
      <div className={styles.socialMediaContainer + " containerSettings"}>
        <InstagramPosts />
        <div className="reviews">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
