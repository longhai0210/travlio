import './SearchBox.scss';
import { DownOutlined, CarOutlined} from '@ant-design/icons';


export default function SearchBox(){
    return (
        <div className="search-box">
            <div className="search-item">
                <div className="search-title"><CarOutlined /> All Destinations <DownOutlined style={{fontSize:"10px"}}/></div>
            </div>
            <div className="search-item">
                <div className="search-title">Date from</div>
            </div>
            <div className="search-item">
                <div className="search-title">Date to</div>
            </div>
            <div className="search-item">
                <div className="search-title">Guests <span>0</span></div>
            </div>
            <button>SEARCH</button>
        </div>
    )
}