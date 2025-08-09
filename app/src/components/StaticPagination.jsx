import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const StaticPagination = ({ max = 1, currentPage = 1}) => {

  const [paginationNumbers, setPaginationNumbers] = useState([]);
  const activeStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        textAlign: 'center',
        border: 'solid 2px', 
        borderRadius: '50%',
        color: 'red',
        textDecoration: 'none',
        margin: '0 2px'
        };
    const commonStyle = {
        color: 'black',
        border: 'solid 1px',
        textDecoration: 'none'
        };


  useEffect(() => {
    setPaginationNumbers([]); //Czyścimy ponownie bo funkcja uruchamia się i dublują się podczas pisania kodu. 
    for (let i = 0; i < max; i++) {
      setPaginationNumbers((prewPaginationNumbers) => [...prewPaginationNumbers, i+1]);
    };

  }, [max]);      
  

  return (<div>Strona<br/>
  {paginationNumbers.map( (numPage, index) => 
      <NavLink key={index} realtive to={`?page=${numPage}`} style={({ isActive }) => isActive ? activeStyle : commonStyle}>{numPage}</NavLink>
  )}
  </div>
  );
};
export default StaticPagination;
