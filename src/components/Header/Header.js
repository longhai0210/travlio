import Logo from '../../img/logo.png';
import Menu from './Menu/Menu';
import './Header.scss'; 
import {useState} from 'react';
import { Drawer } from 'antd';
import { AlignRightOutlined } from "@ant-design/icons";
export default function Header(){
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setVisible(true);
      };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
        <header className="header-container">
            <div className="logo-box">
                <a href="/">
                    <img src={Logo} alt=""></img>
                </a>
            </div>
            <div className="menuToggle" onClick={showDrawer}>
                <AlignRightOutlined />
            </div>
            <div className="menu-box">
                <Menu></Menu>
            </div>
        </header>
        <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <Menu></Menu>
      </Drawer>
      </>
    );
}