import PopupWithForm from "./PopupWithForm";
import Validator from './Validator';

function EditAvatarPopup({
  isOpen,
  onClose,
  onSubmit,
  buttonText,
  isSubmitEnabled = true,
  titleText = "Обновить аватар",
  fields,
  errors = {},
  onChange,
}) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ ...fields });
  }

  return (
    <PopupWithForm
      titleText={titleText}
      name="avatar-edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      isSubmitEnabled={isSubmitEnabled}
    >
      <label className="form__label">
        <input
          name="avatar"
          type="url"
          className="form__input form__input_type_name"
          placeholder="Ссылка на аватар"
          required
          onChange={onChange}
          value={fields ? (fields.avatar || '') : undefined}
        />
        <span className={`form__error avatar-error ${(errors.avatar) ? 'form__error_active' : ''}`}>{errors.avatar}</span>
      </label>
    </PopupWithForm>
  );
}

export default Validator(EditAvatarPopup);
