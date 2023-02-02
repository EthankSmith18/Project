import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';



function Grid() {

  window.onload = () => {
    const grid =document.querySelector('.grid');

    const masonry = Masonry(grid);
  };

  const  {birds}  = useOutletContext();
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>  
      <Masonry>    
        {birds &&  birds.map(bird => {
          return(
          <div className='grid-item' key={bird._id}><Link to={`/birds/${bird._id}`}><img src={bird.image} alt={bird.name} style={{width:'100%', display: 'block'}} /></Link>
          </div>
          )}
        )} 
      </Masonry>       
    </ResponsiveMasonry>
    
  )
}

export default Grid