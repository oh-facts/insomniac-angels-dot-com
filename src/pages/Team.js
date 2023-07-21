import molly from "../assets/team/molly.png"
const Team = () => {


    return (
        <div className="Team">

            <div className="card-container">
                <p style={{ textIndent: "center" }}>
                    Based in Manhattan, Cosmic Bunny Studios is the art studio behind the project - Insomniac Angels.
                </p>
                <img
                    src={molly}
                    alt="molly"
                    style={{ width: "20rem", paddingTop: "5rem" }}
                />

            </div>

        </div>

    );
}

export default Team;