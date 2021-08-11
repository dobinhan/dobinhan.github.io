import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <div className="menu_top">
    <ul>
      <li>
        <NavLink to="/trangchu" title="Trang chủ" activeClassName="active" exact>
        
          Trang chủ
        </NavLink>
      </li>
      <li>
        <NavLink to="/product" title="Giày" activeClassName="active" exact >
          Giày
        </NavLink>
      </li>
      <li>
      <NavLink to="/product/add" title="Thêm" activeClassName="active" exact >
          Thêm sản phẩm
        </NavLink>
      </li>
      <li>
        <a href="diachi.html" title="Địa chỉ">
          {" "}
          Địa chỉ{" "}
        </a>{" "}
      </li>
      <li>
      <NavLink to="/" title="đăng nhập" activeClassName="active" exact >
          Đăng nhập
        </NavLink>
      </li>
    </ul>
    <div className="timkiem">
      <input
        type="search"
        className="gsearch"
        name="gsearch"
        defaultValue="tìm kiếm"
      />
      <button type="submit">search</button>
    </div>
  </div>
  
</>
)
}
export default Header;