import logo from '../../../img/logo-light.png';
import { FacebookFilled, TwitterOutlined, YoutubeFilled, LinkedinFilled} from '@ant-design/icons'

export default function ContactInfo (){
    return (
        <div className="contact">
            <a href="$">
                <img src={logo} alt=""/>
            </a>
            
            <p>Email:</p>
            <span>hello@travlio.com</span>
            <p>Call:</p>
            <span>+91 855 742 6789</span>

            <div className="social-icon">
                <FacebookFilled />
                <TwitterOutlined />
                <YoutubeFilled />
                <LinkedinFilled />
            </div>
        </div>
    )
}