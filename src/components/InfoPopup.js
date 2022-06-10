import Popup from "./Popup";

function InfoPopup({ icon, text, onClose }) {

    return (
        <Popup
            additionalPopupMods="popup_type_info"
            additionalPopupContainerMods="popup__container_type_info"
            isOpen={!!icon && !!text}
            onClose={onClose}
        >
            <img
                className="popup__image popup__image_info"
                src={icon}
                alt={text}
            />
            <p className="popup__caption popup__caption_big">{text}</p>
        </Popup>
    );
}

export default InfoPopup;