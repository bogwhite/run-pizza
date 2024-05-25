import { useRouteError } from "react-router-dom";
import Header from "../header/Header";
import styles from "./Error.module.css";

function Error() {
  // Error state
  const error = useRouteError();

  return (
    <section className="page_layout">
      <Header show="back" />

      <div className="page_background">
        <div className="error">
          <h4 className={styles.title_heading}>Something went wrong 😢</h4>

          <p className={styles.title_paragraph}>
            {error.data || error.message}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Error;
