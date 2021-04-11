
import BannerText from './BannerText/BannerText';
import './MainContent.scss';
import SearchBox from './SearchBox/SearchBox';

function MainContent() {
    
        return (
            <div className="banner">
                <div className="main-content">
                    <div style={{height:'270px'}} className="space-inner"></div>
                    <BannerText></BannerText>
                    <SearchBox></SearchBox>
                    <div style={{height:'270px'}} className="space-inner"></div>
                </div>
            </div>
            
        );
    
}

export default MainContent;