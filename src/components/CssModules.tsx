import classes from "../assets/sass/CssModules.module.scss";

const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules</p>
      <button className={classes.button}>Fight</button>
    </div>
  );
};

export default CssModules;
