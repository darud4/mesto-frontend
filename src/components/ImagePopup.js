import Popup from "./Popup";

function ImagePopup({ card, onClose }) {
  return (
    <Popup
      additionalPopupMods="popup_type_image"
      additionalPopupContainerMods="popup__container_type_image"
      isOpen={!!card}
      onClose={onClose}
    >
      <img
        className="popup__image"
        src={card ? card.link : "#"}
        alt={card ? card.name : "#"}
      />
      <p className="popup__caption">{card && card.name}</p>
    </Popup>
  );
}

export default ImagePopup;
