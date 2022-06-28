import React from "react";
import "./character.css";

export default function Characters({ item }) {
  return (
    <div>
      <div className="characters-card">
        <div className="characters-card__content">
          <div className="characters-card__content--image">
            <div className="characters-card__content--image__logo">
              <img src={item.image} />
            </div>
            <div className="characters-card__content--info">
              <div className="characters-card__content--info__name">
                <p>{item.name}</p>
              </div>
              <div className="characters-card__content--info__created">
                <p>created:&nbsp;{item.created}</p>
              </div>
            </div>
          </div>
          <div >
            <div className="characters-card__personal-data">
              <p id="bold">status:&nbsp;</p>
              <p>{item.status}</p>
            </div>
            <div className="characters-card__personal-data">
              <p id="bold">species:&nbsp;</p>
              <p>{item.species}</p>
            </div>
            <div className="characters-card__personal-data">
              <p id="bold">gender:&nbsp;</p>
              <p>{item.gender}</p>
            </div>
            <div className="characters-card__personal-data">
              <p id="bold">{item.type != "" && "type:"}</p>
              <p>&nbsp;{item.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
