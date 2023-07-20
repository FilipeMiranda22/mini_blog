/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />

      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>

      <div className={styles.tags}>
        {post.tags.map((tag, index) => (
          <p key={index}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ver mais
      </Link>
    </div>
  );
};

export default PostDetail;
