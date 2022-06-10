import Popup from "./Popup";

function PopupWithForm({ buttonText = "Сохранить", isSubmitEnabled = true, ...props }) {
  return (
    <Popup
      isOpen={props.isOpen}
      onClose={props.onClose}
      titleText={props.titleText}
      additionalPopupContainerMods="popup__container_type_form"
    >
      <form
        action="#"
        className={`form ${props.name ? "form_type_" + props.name : ""}`}
        noValidate
        name={props.name}
        onSubmit={props.onSubmit}
      >
        {props.children}
        <button
          disabled={props.isButtonDisabled}
          className={`form__submit${
            !isSubmitEnabled ? " form__submit_disabled" : ""
          }`}
        >
          {buttonText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
