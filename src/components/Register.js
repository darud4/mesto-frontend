import { useState } from 'react';

function Register({ titleText = 'Регистрация', buttonText = "Зарегистрироваться", isSubmitEnabled = true, name, onSubmit, ...props }) {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleMailChange = ({ target }) => setMail(target.value);
    const handlePasswordChange = ({ target }) => setPassword(target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(mail, password)
    }

    return (
        <section className="login">
            {titleText && <h2 className="title">{titleText}</h2>}
            <form
                action="#"
                className={`form ${name ? "form_type_" + name : ""}`}
                noValidate
                name={name}
                onSubmit={handleSubmit}
            >
                <label className="form__label">
                    <input
                        name="mail"
                        type="email"
                        className="form__input form__input_theme_dark"
                        placeholder="Email"
                        required
                        minLength="2"
                        maxLength="40"
                        value={mail}
                        onChange={handleMailChange}
                    />
                    <span className="form__error name-error"></span>
                </label>
                <label className="form__label">
                    <input
                        name="password"
                        type="password"
                        className="form__input form__input_theme_dark"
                        placeholder="Пароль"
                        required
                        minLength="2"
                        maxLength="30"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <span className="form__error about-error"></span>
                </label>
                <button
                    disabled={!isSubmitEnabled}
                    className={`form__submit form__submit_theme_dark ${!isSubmitEnabled ? " form__submit_disabled" : ""
                        }`}
                >
                    {buttonText}
                </button>
                <a href="/signin" className="login__link">Уже зарегистрированы? Войти</a>
            </form></section>)
}

export default Register;