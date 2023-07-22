import molly from "../assets/team/molly.png"
import table from "../assets/team/table.png"

import "../styles/pages/Team.css"

const Team = () => {


    return (
        <div className="Team">
            <div className="studio-container">

                <img className="studio"
                    src={table}
                    alt="molly"

                />
                <div className="studio-overlay" />


            </div>

            <div className="text-box" >
                Based in Manhattan, Cosmic Bunny Studios is the art studio behind the project - Insomniac Angels.
            </div>
        </div>


    );
}

export default Team;