import './City.scss';
import Title from '../Title/Title'
import Data from './CityData.json'
import CityItem from './CityItem/CityItem';

export default function City(){
   
   return(
    <>
    <Title subTitle="Popular Travel Packages" title ="Top Cities for Travel" background="#fff"></Title>
    <div className="city-items">
        {
            Data.map((val, index)=>{
                return <CityItem data={val} key={index}></CityItem>;
            })
        }
    </div>
        
    </>
   ) 

}