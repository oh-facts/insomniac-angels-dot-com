import molly2 from "../assets/team/molly2.jpg"
import gabdu from "../assets/team/gabdu.jpg"
import yufi from "../assets/team/yufi.jpg"

import "../styles/components/TeamProfile.css"

const TeamProfile = () => {
  const Profile = ({ name, role, description, image }) => {
    return (
      <div className="profile-container">
        <img className="profile" src={image} alt={name} />
        <p className="profile">
        <b>Name: </b> {name}
        <br />
        <br />
        <b>Role: </b> {role}
        <br />
        <br />
        {description}
        </p>
      </div>
    );
  };

  const profiles = [
    {
      name: "Cosmic Bunny / Yufi",
      role: "Designer, Writer",
      description: "Founded the studio with two other friends from their uni. Has more friends but they are either busy with (middle) school or are imaginary. When they're not working, they're rewriting the story over and over again. ",
      image: molly2,
    },
    {
      name: "Cosmic Donkey / Agnes",
      role: "Artist, Animator",
      description: "Likes listening to music/videos 24 x 7 in the background, even while doing mundane tasks. Needs constant stimulation or *will* lose interest.",
      image: yufi,
    },
    {
      name: "Cosmic Friend / Gabdu",
      role: "Programmer, Composer",
      description: "Introduced Yufi and Anges to Minecraft. In his free time, he takes music lessons to help with the project since no one has any experience with it.",
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
