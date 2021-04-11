export default function StayItem (props){
    return (
        <div className="item">
            <div className="cover-img">
                <img src={props.img} alt=""/>
                <div className="cover"></div>
            </div>
            <div className="discount">{'discount '+props.discount}</div>
            <div className="description">
                <div className="title">{props.title}</div>
                <div className="price">{'$'+props.price+'/ticket'}</div>
            </div>
        </div>
    )
}