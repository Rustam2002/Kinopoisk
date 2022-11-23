import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import "./css/Newfilms.css";

function Nevfilms() {
    const location = useLocation();
    return (
        <section>
            <div className="Main">
                <div className="Main_top">
                    <div className="Main__left"><img src={location.state.poster} alt="poster" /></div>
                    <div className="Main__center">
                        <h1>{location.state.title}({location.state.year})</h1>
                        <div className="film_info">
                            <h3>О фильме</h3>
                            <ul>
                                <li><p>Год производста</p>{location.state.year}</li>
                                <li>
                                    <p>Жанр</p>{location.state.genres +","}
                                </li>
                                <li><p>Длительность фильма</p>{location.state.runtime} мин</li>
                                <li><p>Описание</p>{location.state.summary}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Main__right">
                        <div className="raiting">{location.state.rating}/10</div>
                        <h4>{location.state.id} оценок</h4>
                    </div>
                </div>
                <div className="player">
                    <h1>Смотреть трейлер</h1>
                    <ReactPlayer className="player_mini" url="https://www.youtube.com/watch?v=lfFFhLD8RE8" playing="true" controls="true"/>
                </div>
            </div>
        </section>
    )
}
export default Nevfilms;