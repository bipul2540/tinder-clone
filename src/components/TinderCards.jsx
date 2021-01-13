import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./../style/TinderCard.css";
import axios from "./../axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const req = await axios.get("/tinder/card");
    setPeople(req.data);
    console.log(req.data);
  };

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirections(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCard__container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person._id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.imgUrl})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
