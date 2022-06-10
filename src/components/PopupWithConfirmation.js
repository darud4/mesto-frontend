import Popup from "./Popup";

function PopupWithConfirmation({
  buttonText = "Да",
  isOpen,
  onClose,
  titleText,
  onSubmit,
}) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      titleText={titleText}
      additionalPopupContainerMods="popup__container_type_form"
    >
      <button
        onClick={onSubmit}
        className={`form__submit form__submit_margin-top_small`}
      >
        {buttonText}
      </button>
    </Popup>
  );
}

export default PopupWithConfirmation;
