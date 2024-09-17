import css from "../HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.titleWrapper}>
      <h1 className={css.mainTitle}>Welcome to the best Contact App ever!!!</h1>
      <p className={css.subtitle}>Save your contacts easily</p>
    </div>
  );
};
export default HomePage;
