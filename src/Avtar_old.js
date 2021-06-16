import React from "react";
import "./Avtar.css";
import Avtarlist from "./Avtarlist";
import "tachyons";

/*
const Avtar = (props) => {
  return (
    
    <div className="cartInfo tc dib ma2">
      <img src="https://joeschmoe.io/api/v1/developer" alt="Avtar" />
      <h1 className="">{props.name}</h1>
      <p> {props.work}</p>
    </div>
  );
};
*/

const Avtar = (props) => {
  const avtartArrayListi = [
    {
      id: 1,
      name: "Sunil Verma",
      work: "Sr Software Developer",
    },
    {
      id: 2,
      name: "Sameer",
      work: "Sr Web Developer",
    },
    {
      id: 3,
      name: "Robin",
      work: "Database Developer",
    },
    {
      id: 4,
      name: "Nitin Kumar",
      work: "UI/UX Developer",
    },
    {
      id: 5,
      name: "John",
      work: "Full Stack",
    },
  ];

  //  name={avtartArrayListi[0].name}  this is destructing

  // Limitation we are calling  4times so we will use MAP funciton

  /*
  return (
    <div className="main_wrap">
      <h1>Welcome to Wold</h1>
      <Avtarlist
        name={avtartArrayListi[0].name}
        work={avtartArrayListi[0].work}
      />
      <Avtarlist
        name={avtartArrayListi[1].name}
        work={avtartArrayListi[1].work}
      />
      <Avtarlist
        name={avtartArrayListi[2].name}
        work={avtartArrayListi[2].work}
      />
      <Avtarlist
        name={avtartArrayListi[3].name}
        work={avtartArrayListi[3].work}
      />
      <button>Fiter</button>
    </div>
  );
*/

  // Map(callbackfunction(currentValue,  Index ,  array pass argument))

  // Traditional way
  // avtartArrayListi.map(funciton(){ });

  const arrayAvtarCards = avtartArrayListi.map((avtarcard, i) => {
    return (
      <Avtarlist
        key={avtartArrayListi[i].id}
        name={avtartArrayListi[i].name}
        work={avtartArrayListi[i].work}
        id={avtartArrayListi[i].id}
      />
    );
  });

  return (
    <div className="main_wrap">
      <h1>Welcome to Wold</h1>
      {arrayAvtarCards}
      <button>Fiter</button>
    </div>
  );
};

export default Avtar;
