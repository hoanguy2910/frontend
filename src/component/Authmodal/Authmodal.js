
import './Authmodal.css';

const Authmodal=({closemodal,current,setcurrent})=>{
    const formlogin = (e)=>{
        e.preventDefault();
        alert("Đăng nhâp thành công");
        closemodal();
    }
    const formregister = (e)=>{
        e.preventDefault();
        alert("Đăng ký thành công");
        closemodal();
    }
    return(
        <div className='modal' onClick={closemodal}>
            <div className='content' onClick={(e)=>e.stopPropagation()}>
                <span className='close' onClick={closemodal}>&times;</span>
                {
                    current === "login" ? (
                        <div>
                            <div className='classform'>
                                <h2>Đăng nhập</h2>
                                <form onSubmit={formlogin}>
                                    <input placeholder='Tài khoản' required></input>
                                    <input placeholder='Mật khẩu' required></input>
                                    <button type='submit'>Đăng nhập</button>
                                </form>
                            </div>                            
                            <p>Chưa có tài khoản?{" "}
                            <span className='switch' onClick={()=>setcurrent("register")}>Đăng ký </span>
                            </p>
                        </div>
                    ):(
                       <div>
                            <div className='classform'>
                                <h2>Đăng ký</h2>
                                <form onSubmit={formregister}>
                                    <input placeholder='Tài khoản' required></input>
                                    <input placeholder='Mật khẩu' required></input>
                                    <button type='submit'>Đăng ký</button>
                                </form>
                            </div>
                            <p>Đã có tài khoản?{" "}
                            <span className='switch' onClick={()=>setcurrent("login")}>Đăng nhập </span>
                            </p>
                        </div> 
                    )
                }
            </div>
        </div>
    );
};

export default Authmodal;