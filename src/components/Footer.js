import React from "react";
import "./css/Footer.css";
import icon1 from "../assets/img/example.svg";
import icon2 from "../assets/img/tiktok.svg";
import icon3 from "../assets/img/first.svg";
import icon4 from "../assets/img/second.svg";
import icon5 from "../assets/img/third.svg";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer__top">
                <div className="icons">
                    <img src={icon3} alt="icon" />
                    <img src={icon4} alt="icon" />
                    <img src={icon5} alt="icon" />
                    <img src={icon1} alt="icon" />
                    <img src={icon2} alt="icon" />
                </div>
                <div>
                    <h5>Мы всегда готовы вам помочь.</h5>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer_info">
                    <ul>
                        <li>© 2003–2022 Кинопоиск. 18+</li>
                        <li>Федеральные каналы доступны для бесплатного просмотра круглосуточно</li>
                        <li>HBO ® and related service marks are the property of Home Box Office, Inc</li>
                        <li>ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва, ул. Садовническая, д. 82, стр. 2, пом. 9А01</li>
                        <li>Адрес для обращений пользователей: kinopoisk@support.yandex.ru</li>
                    </ul>
                </div>
                <div>Проект компании One piece is real</div>
            </div>
        </div>
    )
}

export default Footer;