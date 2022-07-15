import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Mohit = () => {
const [news , setNews]=useState([]);

useEffect(()=>{
async function okay(){
    const pekka = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f56b8410daba43bb90b72db4f6350b34`);
    console.log(pekka.data.articles);
    setNews(pekka.data.articles);
}
okay();}
)        

 

        
  return (
    <div className='main'>
        
       {news.map((w)=>{
          return(
            <div className="secondmain">
            <div className='headlines'>{w.author}</div>
            <div className="paragraph">{w.title}</div>
            <div className="image"><img src={w.urlToImage} alt="" /></div>
        </div>
          )
       })}
            
        
    </div>
  )
}

export default Mohit