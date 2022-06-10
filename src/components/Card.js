import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  const isOwn = currentUser._id === card.owner;
  const isLiked = card.likes.some((i) => i === currentUser._id);

  return (
    <li className="card">
      <img
        onClick={handleCardClick}
        className="card__image"
        src={card.link}
        alt={card.name}
      />
      <h2 className="card__title">{card.name}</h2>
      <button
        className={`card__delete${!isOwn ? " card__delete_hidden" : ""}`}
        onClick={handleDeleteClick}
        type="button"
      ></button>
      <div className="card__like-wrap">
        <button
          className={`card__like${isLiked ? " card__like_active" : ""}`}
          type="button"
          onClick={handleLikeClick}
        ></button>
        <span className="card__like-count">{card.likes.length}</span>
      </div>
    </li>
  );
}

export default Card;
