import { useContext , useEffect} from "react";
import { BrowserRouter,NavLink } from "react-router-dom";
import { LoginContext } from "../context";



function NavBar(){
    const {
        invest, 
        setInvest,
        selectedInvest, 
        setSelectedInvest
    } = useContext(LoginContext);
   
    const activeStyle = {
        border: 'none', 
        color: 'black',
        textDecoration: 'underline'
        };
    const commonStyle = {
        color: 'black',
        textDecoration: 'none'
        };
    const investition = localStorage.getItem("invest").split(','); // przepisanie stanu lokalnego do stanu komponentu bo po odświeżeniu strony znikają dane. 
    investition.push("UND");
    

    useEffect(() => {
        setSelectedInvest(invest[0]);
        //console.log(investition);
        //console.log(selectedInvest);
        if(invest.length===0){
            setInvest(investition);
            setSelectedInvest(investition[0]);
        }
    }, []);

  

      
    return (
        
        <div> 
             <NavLink end to="/events" style={({ isActive }) => isActive ? activeStyle : commonStyle}> Zgłoszenia </NavLink> 
             dotyczące inwestycji: 
             <select value={selectedInvest} onChange={(e) => setSelectedInvest(e.target.value)}>
                {invest.map((item)=> <option key= {item} value={item}>{item}</option>)}
            
                 {/* {console.log(ivestition)} */}
                 {/*{console.log("invest '\/")}
                 {console.log(invest)}
                 {console.log("selected Invest \/")}
                {console.log(selectedInvest)
                } */}
             </select>
            
            <br/>
             [użytkownicy*] 
            <br/>* dla adminia - zarzadzanie użytkownikami
        </div>
    )

};

export default NavBar;