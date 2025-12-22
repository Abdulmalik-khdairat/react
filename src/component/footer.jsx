import style from "../style/footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerLogoContainer}>
        <img className={style.footerLogo} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
        <a href="http://" className={style.userBtn}>
          Hi Abdulmalik
        </a>
      </div>
      <div>
        <h2>The BASICS</h2>
        <a className={style.links} href="#a">
          About TMDB
        </a>
        <a className={style.links} href="#a">
          Contact Us
        </a>
        <a className={style.links} href="#a">
          API Documentation
        </a>
        <a className={style.links} href="#a">
          API for Business
        </a>
        <a className={style.links} href="#a">
          System Status
        </a>
      </div>
      <div>
        <h2>Get Involved</h2>
        <a className={style.links} href="#a">
          Contribution Bible
        </a>
        <a className={style.links} href="#a">
          Add New Movie
        </a>
        <a className={style.links} href="#a">
          Add New TV Show
        </a>
      </div>
      <div>
        <h2>Community</h2>
        <a className={style.links} href="#a">
          Guidelines
        </a>
        <a className={style.links} href="#a">
          Discussions
        </a>
        <a className={style.links} href="#a">
          Leaderboard
        </a>
        <a className={style.links} href="#a">
          Support Forums
        </a>
      </div>
      <div>
        <h2>Legal</h2>
        <a className={style.links} href="#a">
          Terms of Use
        </a>
        <a className={style.links} href="#a">
          API Terms of Use
        </a>
        <a className={style.links} href="#a">
          Privacy Policy
        </a>
        <a className={style.links} href="#a">
          DMCA Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
