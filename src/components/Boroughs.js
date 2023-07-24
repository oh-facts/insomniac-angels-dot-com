
const Boroughs = () => {
  const Profile = ({ name, role, description, image }) => {
    return (
      <>

        <div className="borough-container">
          <p className="borough" style={{ lineHeight:"2"}}>
            <li>{name}</li>
            <br />
            {description}

          </p>

        </div>
        <br />
        <hr />
        <br />
        <br />
      </>
    );
  };

    const profiles = [
     
      {
        
        name: "Moon",
        description: "The flashy  and expensive Borough of dreams. No crisis ever could make anyone want to leave this place. Mors tested this hypothesis by killing hundreds of thousands and levelling most neighborhoods. It looks like a cement pavement that just set in, with debris of all sorts strewn around. Only 5% of this place remains recognizable. Our protagonist lives here.",
          /* Every ambitious young adult wishes they could move here because it is objectively the only way they could ever pursue their dreams.*/
      },
      {
        name: "Madilyn",
        description: "Gained popularity after Moon was deemed \"a bad idea\" by The BiWeekly. Has the most amount of parks and gardens, and since Mors has been avoiding forests, this place is currently deemed, \"Not a bad idea\" by the BiWeekly.",

      },
      {
        name: "The Dawns",
        description: "This borough has transformed heavily over the years. Once, plagued by high crime rates and ineffective policies, has quickly turned around because of the President's efforts (Presidents's efforts). This large change, in a rather small amount of time is visible by the sharp shifts in suburban and rural areas. While this borough may have had a troubled past, its present and future are just as bad, since Mors arrived, and made it his home. He rests here on sundays :gn:.",

      },
      {
        name: "Duchess",
        description: "The player finds himself in a culturally different area every step he takes. Its like a hundred different boroughs, squeezed next to each other, each just as unique, as immersive.",

      },
      {
        name: "Tensi",
        description: "Even Mors said no. This place will be blocked off because we don't want players to accidentally wander here.",

      },

  ];

  return (
    <div>
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          name={profile.name}

          description={profile.description}

        />
      ))}
    </div>
  );
};

export default Boroughs;

