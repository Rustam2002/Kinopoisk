import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Tvshow.css";
import gears from "../assets/img/gears.svg";

const Tvshow = () => {
    return (
        <div className="Tv_main">
            <div className="Tv__block">
                <h1>Страница находиться в разработке <Link to={"/"}> вернуться</Link> </h1>
                <img src={gears} alt='gears' />
            </div>
        </div>
    )
}
export default Tvshow;