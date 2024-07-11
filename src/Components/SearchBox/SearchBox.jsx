import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
