export default function NewCard() {
  return (
    <form className="cards-popup__form" noValidate>
      <h2 className="cards-popup__title">Novo Local</h2>

      <fieldset className="cards-popup__fieldset">
        <input
          className="cards-popup__input"
          type="text"
          placeholder="Título"
          id="cards-title"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="cards-popup__input-error cards-title-error"></span>
      </fieldset>

      <fieldset className="cards-popup__fieldset">
        <input
          className="cards-popup__input"
          type="url"
          placeholder="URL da imagem"
          id="cards-link"
          name="link"
          required
        />
        <span className="cards-popup__input-error cards-link-error"></span>
      </fieldset>

      <button className="cards-popup__add-button" type="submit">
        Criar
      </button>
    </form>
  );
}
