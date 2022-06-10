import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  buttonText = "Создать",
  titleText = "Новое место",
}) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");

  const handlePlaceChange = (e) => setPlace(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ place, link });
  }

  function handleClose() {
    setPlace("");
    setLink("");
    onClose();
  }

  return (
    <PopupWithForm
      titleText={titleText}
      name="card-add"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        <input
          name="place"
          type="text"
          className="form__input form__input_type_place"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={place}
          onChange={handlePlaceChange}
        />
        <span className="form__error place-error"></span>
      </label>
      <label className="form__label">
        <input
          name="link"
          type="url"
          className="form__input form__input_type_picture-link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="form__error link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
