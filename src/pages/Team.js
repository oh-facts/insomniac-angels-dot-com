import molly from "../assets/team/molly.png"
const Team = () => {


    return (
        <div className="Team">

            <p style={{ textIndent: "center" }}>
                Based in Manhattan, Cosmic Bunny Studios is the art studio behind the project - Insomniac Angels.
            </p>



            <div className="card-container">
                <img
                    src={molly}
                    alt="molly"
                    style={{ width: "20vw", paddingTop: "5vw" }}
                />

            </div>

        </div>

    );
}

export default Team;