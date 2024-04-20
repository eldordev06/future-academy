import logoIcon from "../assets/icons/header/logo-icon.svg";
import deskMenuIcon from "../assets/icons/header/desk-menu-icon.svg";
import markerIcon from "../assets/icons/header/marker.svg";
import profileIcon from "../assets/icons/header/profile-icon.svg";
import "../style/Header.scss";

function CreateHeader() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a href="/" className="header__logo" aria-label="Go to home page.">
              <img
                src={logoIcon}
                alt="Logo icon."
                className="header__logo-icon"
              />
            </a>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__list-item">
                  <a
                    href="all-courses.html"
                    className="header__link header__link--with-icon header__link--active"
                  >
                    <img
                      src={deskMenuIcon}
                      alt="Menu icon."
                      className="header__icon header__icon--menu"
                    />
                    <span>Все курсы</span>
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="events.html" className="header__link">
                    Мероприятия
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="knowledge-base.html" className="header__link">
                    Базы знаний
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="career.html" className="header__link">
                    Карьера
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__right">
              <div className="header__select-span">
                <label htmlFor="location">
                  <img
                    className="header__icon header__icon--marker"
                    src={markerIcon}
                    alt="Marker icon"
                  />
                </label>
                <select
                  name="location"
                  id="location"
                  className="header__select"
                >
                  <option className="header__option" value="samarkand">
                    Самарканд
                  </option>
                  <option className="header__option" value="tashkent">
                    Ташкент
                  </option>
                  <option className="header__option" value="andijan">
                    Андижан
                  </option>
                  <option className="header__option" value="bukhara">
                    Бухара
                  </option>
                </select>
              </div>
              <a href="tel:+998915484356" className="header__phone">
                +998 91 548 43 56
              </a>
              <button className="header__profile-btn" aria-label="Sign in.">
                <img
                  src={profileIcon}
                  alt="Profile icon."
                  className="header__icon header__icon--profile"
                />
                <span>Войти</span>
              </button>
            </div>
            <button className="header__menu menu">
              <span className="menu__line"></span>
              <span className="menu__line menu__line--middle"></span>
              <span className="menu__line"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default CreateHeader;
