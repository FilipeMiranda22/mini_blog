import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${styles.about} container`}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito em React no Front-End e FireBase
        no Back-End.
      </p>
      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  );
};

export default About;
