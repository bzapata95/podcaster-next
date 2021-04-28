import format from "date-fns/format";
import esPE from "date-fns/locale/es";

import styles from "./styles.module.scss";

function Header() {
  const currenDate = format(new Date(), "EEEEEE, d MMMM", { locale: esPE })
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcaster" />

      <p>Lo mejor para oir, siempre</p>

      <span>{currenDate}</span>
    </header>
  );
};

export default Header;
