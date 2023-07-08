import { useNavigate } from "react-router-dom";
const MenuBar = () => {
   
    const tabs = [
        {title: 'Home', id: 1, path:''},
        {title: 'About', id: 2, path:'/about'},
        {title: 'Media', id: 3, path:'/media'},
        {title: 'Team', id: 4, path:'/team'},
        {title: 'Blog',id: 5, path:'/blog'},
        {title: 'FAQ', id: 6, path:'/faq'},
        {title: 'Contact', id: 7, path:'/contact'}
        
    ]
   const navigate = useNavigate()
    return ( 
        tabs.map((tab) =>(
        <>
        
            <button key = {tab.id} onClick={() =>navigate(tab.path)}>
                {tab.title}    
            </button>
        </>
        ))
     );
}
 
export default MenuBar;