
import logo from '../../images/logo.png';
import timkiem from '../../images/timkiem.png';
import giohang from '../../images/giohang.png';
import './Header.css';
import Authmodal from '../Authmodal/Authmodal';
import { useState } from 'react';

function Header(){
    const [isopen,setisopen]= useState(false);
    const [current,setcurrent]= useState("login");
    return(
        <div className="Header">
            <div className='logo'>
                <img src={logo}></img>
                <p>SmartShop</p>
            </div>
            <p>Trang chủ</p>
            <p>Sản phẩm</p> 
            <p>Khuyến mãi</p>
            <p>Liên hệ</p>
            <div className='timkiem'>
                <input placeholder='Tìm kiếm...'></input> 
                <img src={timkiem}></img>
            </div>
            <img src={giohang}></img>
            <button onClick={()=>{setisopen(true);setcurrent("login");}}>Đăng nhập</button>
            <button onClick={()=>{setisopen(true);setcurrent("register");}}>Đăng ký</button>
            {isopen && (<Authmodal closemodal={()=>setisopen(false)} current={current} setcurrent={setcurrent} />)}
        </div>
    );

}

export default Header;