import './Menu.scss';
import { CaretDownOutlined} from '@ant-design/icons';

export default function Menu(){
    return (
        <>
        <div className="left">
            <ul>
                <li>
                    <a href="$" className="active">Home <CaretDownOutlined style={{fontSize:"10px"}}/></a>
                </li>
                <li>
                    <a href="$">Tours <CaretDownOutlined style={{fontSize:"10px"}}/></a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/error">Error</a>
                </li>
            </ul>
        </div>
        <div className="right">
            <div className="account-login">
            
                <i className="fa fa-user-circle"></i>
            
                <a className="login-text" href="$">
                    Sign in
                </a>
            </div>
        </div>
        </>
    );
}