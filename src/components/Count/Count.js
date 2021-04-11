import './Count.scss';
import {CarOutlined, CloudOutlined, RiseOutlined, SmileOutlined} from '@ant-design/icons';
import Title from '../Title/Title';
export default function Count (){
    return (
        <>
        <Title subTitle="Trending Event of the Week" title="Trending Event" background="#fff" />
        <div className="event">
            <div className="event-item">
                <div className="icon">
                    <CarOutlined/>
                </div>
                <div className="description">
                    <div className="count-number">584</div>
                    <div className="title">Top Local Guides</div>
                </div>
            </div>
            <div className="event-item">
                <div className="icon">
                    <CloudOutlined />
                </div>
                <div className="description">
                    <div className="count-number">7,410</div>
                    <div className="title">Winter Destinations</div>
                </div>
            </div>
            <div className="event-item">
                <div className="icon">
                    <RiseOutlined />
                </div>
                <div className="description">
                    <div className="count-number">680</div>
                    <div className="title">New Tours</div>
                </div>
            </div>
            <div className="event-item">
                <div className="icon">
                    <SmileOutlined />
                </div>
                <div className="description">
                    <div className="count-number">2,540</div>
                    <div className="title">Happy Travelers</div>
                </div>
            </div>
        </div>
        </>
    )
}