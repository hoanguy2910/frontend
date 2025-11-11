
import dt1 from '../../images/dt1.png';
import dt2 from '../../images/dt2.png';
import dt3 from '../../images/dt3.png';
import './Homepage.css';

function Homepage(){
    return (
        <div className="Homepage">
            <p>CÁC SẢN PHẨM NỔI BẬT</p>
            <div className='dienthoai'>
                <img src={dt1} alt=''></img>
                <img src={dt2} alt=''></img>
                <img src={dt3} alt=''></img>
            </div>
        </div>
    );
}

export default Homepage;