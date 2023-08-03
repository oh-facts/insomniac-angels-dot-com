import table from "../assets/team/table.png"
import TeamProfile from "../components/TeamProfile.js";


import "../styles/pages/Team.css"

const Team = () => {


    return (
        <div className="Team">
            <h1>
                Cosmic Bunny Studios
            </h1>
            <div className="studio-container">

                <img className="studio"
                    src={table}
                    alt="molly"

                />
                <div className="studio-overlay" />


            </div>

            <div className="text-box" >
                <br />
                Based in Manhattan, Cosmic Bunny Studios (unregistered) is the art studio behind the project - Insomniac Angels. Founded by Cosmic Bunny, while he was
                writing a book. "No one's ever going to like this, especially after how uncomfortable my reading group got. I don't even know what to do. Who am I even wiriting this for? I KNOW! Why don't I try making it into a game? People like games???"
                <br />
                <br />
                The studio currently has three members including them.
                <br />
                (ALF)IA is their debut.
            </div>

            <h1>Meet the Team</h1>
           <TeamProfile />

        </div>


    );
}

export default Team;