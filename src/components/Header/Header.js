import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img
          className={styles.container__image__img}
          src="https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170704337/81629882-retrato-persona-joven-estudiante-persona-ilustración-vectorial.jpg"
          alt="retrato"
        />
      </div>
      <div className={styles.container__info}>
        <span>Bienvenido</span>
        <h1>Hola, Soy Lorem ipsum dolor </h1>
        <div className={styles.container__skills}>
          <div className={styles.container__animation}>
            <ul className={styles.container__animation__list}>
              <li className={styles.container__animation__list__item}>
                UX Designer.
              </li>
              <li className={styles.container__animation__list__item}>
                Content Writter.
              </li>
              <li className={styles.container__animation__list__item}>
                UI Designer.
              </li>
            </ul>
          </div>
        </div>
        <h2>based in Cafayate</h2>
      </div>
    </div>
  );
}
