import Payment from '../../../img/payment.svg';
export default function Copyright (){
    return (
        <div className="copyright">
            <div className="left">© Copyright 2020 travlio – Powerd By <a href="$">ApusTheme</a></div>
            <div className="right">
                <a href="$"><img src={Payment} alt=""/></a>
            </div>
        </div>
    )
}