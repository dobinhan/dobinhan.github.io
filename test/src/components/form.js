import { useState } from "react";

const AddProductForm = (props) => {
  const [controlValue, setControlValue] = useState({});
  const onHandleChange = (event) => {
    setControlValue({ name: event.target.value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (controlValue) {
      props.onAdd(controlValue);
    }
  };
  return (
    <form onSubmit={onHandleSubmit}>
      {JSON.stringify(controlValue)}
      <div className="mb-3">
        <label className="form-label">Tên sản phẩm</label>
        <input type="text" className="form-control" onChange={onHandleChange} />
      </div>
      <button className="btn btn-primary" type="submit">
        Thêm sản phẩm
      </button>
    </form>
  );
};
export default AddProductForm;
