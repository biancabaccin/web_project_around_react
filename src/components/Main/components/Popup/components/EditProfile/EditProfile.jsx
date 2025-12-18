export default function EditProfile() {
  return (
    <form className="popup__form" noValidate>
      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          type="text"
          placeholder="Nome"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error name-error"></span>
      </fieldset>

      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          type="text"
          placeholder="Sobre mim"
          id="about"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error about-error"></span>
      </fieldset>

      <button className="popup__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
