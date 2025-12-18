export default function EditAvatar() {
  return (
    <form className="popup__form" noValidate>
      <fieldset className="popup__fieldset">
        <input
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
