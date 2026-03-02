import { useState } from "react";

// Картинка для аватара
import avatarImage from "../assets/icons/avatar/avatar-default-svgrepo-com.svg";
import avatarImageHover from "../assets/icons/avatar/avatar-default-svgrepo-com-hover.svg";

// Картинка для калькулятора
import calculatorImage from "../assets/icons/calculator/calculator-svgrepo-com.svg";
import calculatorImageHover from "../assets/icons/calculator/calculator-svgrepo-com-hover.svg";

// Картинка для графика
import graphImage from "../assets/icons/graph/chart-line-svgrepo-com.svg";
import graphImageHover from "../assets/icons/graph/chart-line-svgrepo-com-hover.svg";

// Картинка для лупы
import loupeImage from "../assets/icons/loupe/loupe-search-svgrepo-com.svg";
import loupeImageHover from "../assets/icons/loupe/loupe-search-svgrepo-com-hover.svg";

// Картинка для флага России
import flagRUImage from "../assets/icons/flag/ru/flag-ru-svgrepo-com.svg";

// Картинка для смены темы
import themeImage from "../assets/icons/theme/color-mode-svgrepo-com.svg";
import themeImageHover from "../assets/icons/theme/color-mode-svgrepo-com-hover.svg";

// Хуки
import useHover from "../hooks/useHover";

const Menu = () => {
    const [hoverRef, isHovered] = useHover();
    const setAvatarImage = avatarImage;
    const setCalculatorImage = calculatorImage;
    const setGraphImage = graphImage;
    const setLoupeImage = loupeImage;
    const setThemeImage = themeImage;

    return (
        <>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item place">
                        <h1 className="menu__logo logo">CALCUGRAPH</h1>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            <img
                                src={setCalculatorImage}
                                alt="calculator-image"
                                className="menu__image icon"
                            />
                            <span className="menu__text">Калькулятор</span>
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            <img
                                src={setGraphImage}
                                alt="graph-image"
                                className="menu__image icon"
                            />
                            <span className="menu__text">Графика</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="header__menu settings">
                <ul className="menu__list">
                    <li className="menu__item field">
                        <div className="field__container">
                            <img
                                src={setLoupeImage}
                                alt="loupe-image"
                                className="menu__image field__icon icon"
                            />
                            <input
                                type="text"
                                className="field__input"
                                placeholder="Поиск"
                            />
                        </div>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            <img
                                src={flagRUImage}
                                alt="language-image"
                                className="menu__image icon"
                            />
                            <span className="menu__text">Язык</span>
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            <img
                                src={setThemeImage}
                                alt="theme-image"
                                className="menu__image icon"
                            />
                            <span className="menu__text">Тема</span>
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            <img
                                src={setAvatarImage}
                                alt="avatar-image"
                                className="menu__image icon"
                            />
                            <span className="menu__text">Профиль</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;
