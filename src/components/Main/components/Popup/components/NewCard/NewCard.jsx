export default function NewCard() {
  return (
    <form className="popup__form" noValidate>
      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          type="text"
          placeholder="Título"
          id="cards-title"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error cards-title-error"></span>
      </fieldset>

      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          type="url"
          placeholder="URL da imagem"
          id="cards-link"
          name="link"
          required
        />
        <span className="popup__input-error cards-link-error"></span>
      </fieldset>

      <button className="popup__submit-button" type="submit">
        Criar
      </button>
    </form>
  );
}
