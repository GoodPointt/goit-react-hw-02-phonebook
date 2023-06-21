export const Filter = ({ handleChange, filter }) => {
  return (
    <input
      onChange={handleChange}
      value={filter}
      type="text"
      name="filter"
      placeholder="Search"
      title="Search cntacts"
      required
    />
  );
};
