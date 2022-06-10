import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  buttonText,
  titleText = "Редактировать профиль",
}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = ({ target }) => setName(target.value);
  const handleDescriptionChange = ({ target }) => setDescription(target.value);

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      titleText={titleText}
      name="profile-edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label className="form__label">
        <input
          name="name"
          type="text"
          className="form__input form__input_type_name"
          placeholder="Введите имя"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
        />
        <span className="form__error name-error"></span>
      </label>
      <label className="form__label">
        <input
          name="about"
          type="text"
          className="form__input form__input_type_about"
          placeholder="Введите род занятий"
          required
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="form__error about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
