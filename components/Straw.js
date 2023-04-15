import classes from "./Straw.module.scss";

function Straw(props) {
  const { index, option, result, drawing } = props;
  const updateOptionHandler = (event) => {
    const value = event.target.value;
    props.update(value, index);
  };

  return (
    <li
      className={`${classes.option} ${`option` + index} ${
        result === index ? classes.highlighted : ""
      } ${drawing ? classes.drawing : ""}`}
    >
      <div className={classes["option-index"]}>
        <p>{index + 1}</p>
      </div>
      <div className={classes["input-wrap"]}>
        <img src="/assets/yellow-stripe-straw.png" alt="yellow-stripe-straw" />
        <input
          type="text"
          placeholder="Input an option"
          value={option}
          onChange={updateOptionHandler}
        />
      </div>
      {index > 1 && (
        <img
          src="/assets/cross-out-green.png"
          alt="cross-out"
          className={classes["cross-out"]}
          onClick={props.delete}
        />
      )}
    </li>
  );
}

export default Straw;
