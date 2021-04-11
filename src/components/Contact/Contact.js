import './Contact.scss';
export default function Contact (){
    return (
        <div className="contact-container">
            <div className="title-box">
                <h2 className="title">Get New Jobs Notification!</h2>
                <div className="subtitle">Subscribe & get all related jobs notification.</div>
            </div>
            <div className="contact-box">
                <form>
                    <input placeholder="Enter your Email.."/>
                    <button>Subscribe</button>
                </form>
                
            </div>
        </div>
    )
}