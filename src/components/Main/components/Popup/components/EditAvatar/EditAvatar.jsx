import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { onUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form className="popup__form" noValidate>
      <fieldset className="popup__fieldset" onSubmit={handleSubmit}>
        <input
          ref={avatarRef}
          className="popup__input"
          type="url"
          placeholder="URL da imagem"
          id="photo-url"
          name="link"
          required
        />
        <span className="popup__input-error photo-url-error"></span>
      </fieldset>

      <button className="popup__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
