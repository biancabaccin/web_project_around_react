export default function EditProfile() {
  return (
    <form className="profile-popup__form" noValidate>
      <h2 className="profile-popup__title">Editar perfil</h2>

      <fieldset className="profile-popup__fieldset">
        <input
          className="profile-popup__input"
          type="text"
          placeholder="Nome"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="profile-popup__error name-error"></span>
      </fieldset>

      <fieldset className="profile-popup__fieldset">
        <input
          className="profile-popup__input"
          type="text"
          placeholder="Sobre mim"
          id="about"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="profile-popup__error about-error"></span>
      </fieldset>

      <button className="profile-popup__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
