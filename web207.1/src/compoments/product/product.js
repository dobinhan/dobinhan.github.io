const Product = (props) => {
    return (
      <table>
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
            {props.product.map((item,index)=>(
                <tr key={index} >
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.desc}</td>
                    <td>{item.image}</td>
                </tr>


            ))}
        </tbody>
      </table>
    );
  };
  export default Product;
  