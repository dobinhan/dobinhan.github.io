import { Link } from "react-router-dom";

const Deleteproduct = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên sản phẩm</th>
          <th>giá</th>
          <th>desc</th>
          <th>ảnh</th>
        </tr>
      </thead>
      <tbody>
        {props.product.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.image}</td>
            <td with="150px">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => props.onRemove(item.id)}
              >
                Xóa sản phẩm
              </button>
              <Link
                to={`/product/${item.id}/edit`}
                className="btn btn-primary btn-sm"
              >
                Sửa sản phẩm
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
        }
  export default Deleteproduct;
  