import { Rate } from 'antd';

export default function CommentItem (props){
    return (
        <div className="item">
            <div className="avatar">
                <img src={props.img} alt=""/>
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="title">
                {props.title}
            </div>
            <div className="rating">
                <Rate disabled allowHalf defaultValue={props.rating} />
            </div>
            <div className="comment">
                {props.comment}
            </div>
        </div>
    )
}