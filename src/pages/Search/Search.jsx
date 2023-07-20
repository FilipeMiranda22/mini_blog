import { useQuery } from "../../hooks/useQuery";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";

import styles from "./Search.module.css";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>
        Resultados de: <span>{search}</span>
      </h1>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum resultado foi encontrado!</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
