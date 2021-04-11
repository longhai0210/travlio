import { Rate } from 'antd';

export default function CityItem(props){
    const Data = props.data;
    return (
        <div className="item">
            <div className="item-img">
                <img src={Data.img} alt=""/>
            </div>
            <div className="item-description">
                <div className="infomation">
                    <div className="rating">
                        <Rate disabled allowHalf defaultValue={Data.rating} />
                    </div>
                    <div className="item-name">{Data.name}</div>
                    <div className="address">{Data.address}</div>
                </div>
                <div className="item-price">
                    {
                        Data.off ? (<div className="sale-off">{Data.off}</div>): ''
                    }
                    
                    <div className="old-price"><del>{Data.old}</del></div>
                    <div className="price">{Data.price}</div>
                </div>
            </div>
        </div>
    )
}
