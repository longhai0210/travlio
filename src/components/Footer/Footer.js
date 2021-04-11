import ContactInfo  from './FooterComponents/ContactInfo';
import Coppyright from './Copyright/Copyright';
import QuickLink from './FooterComponents/QuickLink';
import Category from './FooterComponents/Category';
import Useful from './FooterComponents/Useful';
import Download from './FooterComponents/Download'
import './Footer.scss';
export default function Footer (){
    return (
        <>
            <div className="footer-main">
                <ContactInfo/>
                <QuickLink/>
                <Category/>
                <Useful/>
                <Download/>
            </div>
            <Coppyright/>
        </>
    )
}