import './UnderBanner.scss';
import { CarOutlined, CloudOutlined, SmileOutlined} from "@ant-design/icons";

export default function UnderBanner(){

    return(
        <div className="under-banner">
            <div className="item">
                <div className="icon">
                    <CarOutlined />
                </div> 
                <div className="content">
                    <h3 className="title">1,000+ Local Tours</h3>
                    <div className="description">Morbi semper fames lobortis ac hac</div>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <CloudOutlined />
                </div>
                <div className="content">
                    <h3 className="title">Winter Destinations</h3>
                    <div className="description">Morbi semper fames lobortis ac hac</div>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <SmileOutlined />
                </div>
                <div className="content">
                    <h3 className="title">98% Happy Travelers</h3>
                    <div className="description">Morbi semper fames lobortis ac hac</div>
                </div>
            </div>
        </div>
    )
}