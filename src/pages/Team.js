import molly from "../assets/team/molly.png"
const Team = () => {


    return (
        <div className="Team">

            {/*
            <p style={{ fontSize: "45px"}}>
                <b>Hello</b>

            </p>
            */}
            <div className="card-container">
                <img
                    src={molly}
                    alt="molly"
                    style={{ width: "30%" }}
                />

            </div>

        </div>

    );
}

export default Team;