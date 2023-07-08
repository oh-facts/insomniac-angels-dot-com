import { useNavigate } from "react-router-dom";
const MenuBar = () => {
   
    const tabs = [
        {title: 'Home', id: 1},
        {title: 'About', id: 2},
        {title: 'Media', id: 3},
        {title: 'Team', id: 4},
        {title: 'Blog',id: 5},
        {title: 'FAQ', id: 6},
        {title: 'Contact', id: 7}
        
    ]
   const navigate = useNavigate()
    return ( 
        tabs.map((tab) =>(
        <>
        
            <button key = {tab.id} onClick={() =>navigate(tab.title)}>
                {tab.title}    
            </button>
        </>
        ))
     );
}
 
export default MenuBar;