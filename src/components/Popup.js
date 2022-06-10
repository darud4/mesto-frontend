import { useEffect } from "react";

function Popup({
  isOpen,
  onClose,
  additionalPopupMods,
  additionalPopupContainerMods,
  titleText,
  ...props
}) {
  useEffect(() => {
    function handleCloseByEsc({ key }) {
      key === "Escape" && onClose();
    }

    document.addEventListener("keydown", handleCloseByEsc);
    return () => document.removeEventListener("keydown", handleCloseByEsc);
  }, [onClose]);

  function handleCloseByClick({ target }) {
    target.classList.contains("popup") && onClose();
  }

  return (
    <div
      onClick={handleCloseByClick}
      className={`popup${isOpen ? " popup_opened" : ""} ${additionalPopupMods ? additionalPopupMods : ""
        }`}
    >
      <div
        className={`popup__container ${additionalPopupContainerMods ? additionalPopupContainerMods : ""
          }`}
      >
        {titleText && <h2 className="popup__title">{titleText}</h2>}
        {props.children}
        <button
          className="popup__close"
          type="reset"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;
