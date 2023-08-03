import molly2 from "../assets/team/molly2.jpg"
import gabdu from "../assets/team/gabdu.jpg"
import yufi from "../assets/team/yufi.jpg"

import "../styles/components/TeamProfile.css"

const TeamProfile = () => {
  const Profile = ({ name, role, description, image }) => {
    return (
      <>

        <div className="profile-container">
          <img className="profile" src={image} alt={name} />
          <p className="profile">
            <b>Name: </b> {name}
            <br />
            <br />
            <b>Role: </b> {role}
            <br />
            <br />
            <div className="text-box">
              {description}
            </div>


          </p>

        </div>
        <br />
        
        <br />
        <br />
      </>
    );
  };

  const profiles = [
    {
      name: "Cosmic Bunny",
      role: "Designer, Writer",
      description: "Co-founded the studio with two other friends from his uni. Has more friends but half of the time they are busy and 100% of the time, they are imaginary. He intends to break into film-making as a director. He doesn't understand why he wrote this bio in 3rd person, since he did, everyone else will have to too ",
      image: molly2,
    },
    {
      name: "Cosmic Donkey",
      role: "Illustrator, Animator",
      description: " Likes listening to music/videos 24 x 7 in the background, even while doing mundane tasks. Needs constant stimulation or *will* lose interest. When she's not working, she's sleeping. She hopes to make enough money to never have to care about anything ever.",
      image: yufi,
    },
    {
      name: "Cosmic Friend",
      role: "Programmer, Artist",
      description: "Wants to be a \"thousandaire atleast \" so he can fund some of his other projects, and once (AL)FIA reaches critical acclaim and he becomes rich, he'll go up to every spineless VC that called him \"a fake and capable of only amusing toddlers\" and run circles around them in his bugatti.",
      image: gabdu,
    },

  ];

  return (
    <div>
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          name={profile.name}
          role={profile.role}
          description={profile.description}
          image={profile.image}
        />
      ))}
    </div>
  );
};

export default TeamProfile;
