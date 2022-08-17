const Form = ({ value, formChange }) => {
  return (
    <div className="form">
      <form>
        <input
          placeholder="Please Enter a Number"
          className="form-word"
          type="test"
          value={value}
          onChange={formChange}
        ></input>
      </form>
    </div>
  );
};

export default Form;
