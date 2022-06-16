import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  console.log(props.cards)

  return (
    <main className="main">
      <section className="profile">
        <div
          onClick={props.onEditAvatar}
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile__edit"
          ></button>
        </div>
        <p className="profile__about">{currentUser.about}</p>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add"
        ></button>
      </section>
      <section className="places">
        <ul className="places__cards">
          {props.cards.map((card) => (
            <Card
              onCardDelete={props.onCardDelete}
              onCardLike={props.onCardLike}
              onCardClick={props.onCardClick}
              card={card}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
