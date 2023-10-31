import css from './Form.module.css';

const Filter = ({ filterChange, filterValue }) => {
  return (
    <form className={css.form}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          onChange={filterChange}
          value={filterValue}
        ></input>
      </label>
    </form>
  );
};

export default Filter;
