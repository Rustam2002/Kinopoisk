import React, { Component } from "react";
import '../components/css/Home.css';
import Zagolovok from '../assets/img/zagolovok.webp';
import Play from '../assets/img/play.svg';
import Mark from '../assets/img/mark.svg';
import Films from '../components/Films';
import axios from "axios";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            movies: [],
            films: [],
            page: [],
        }
    }
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json"+"?sort_by=title");
        this.setState({ movies, isLoading: false })
    }
    getMoviesByYear = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json"+"?sort_by=rating");
        this.setState({ films:movies, isLoading: false })
    }
    getMoviesByPage = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json"+"?sort_by=rating&page=3");
        this.setState({ page:movies, isLoading: false })
    }
    componentDidMount() {
        this.getMovies();
        this.getMoviesByYear();
        this.getMoviesByPage();
    }
    render() {
        const { isLoading, movies,films,page } = this.state;
        return (
            <section>
                <div className="header">
                    <div className="info">
                        <div className="info__block">
                            <div className="info__text">
                                <img src={Zagolovok} alt="три тысячи лет желаний" />
                                <p>Джинн попадает к литературоведке, которая ничего не хочет. Романтичное фэнтези режиссера «Безумного Макса»</p>
                            </div>
                            <div className="info__button">
                                <button className="info__button_film"> <img src={Play} alt="play" /> Смотреть фильм</button>
                                <button className="info__button_treyler"> Трейлер</button>
                                <button><img src={Mark} alt="mark" /></button>
                                <button>...</button>
                            </div>
                        </div>
                    </div>
                    <div className="Favorite">
                    </div>
                </div>
                <div className="Films_main_block">
                    <h1>Фильмы для вас</h1>
                    <div className="Movie_like">
                        {isLoading ? "Loading..." : movies.map(movie => {
                            return <Films  id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} key={movie.id} rating={movie.rating} large={movie.large_cover_image} genres={movie.genres} runtime={movie.runtime} />
                        })}</div>
                </div>
                <div className="Films_main_block">
                    <h1>Новинки</h1>
                    <div className="Movie_like">
                        {isLoading ? "Loading..." : films.map(movie => {
                            return <Films  id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} key={movie.id} rating={movie.rating} large={movie.large_cover_image} genres={movie.genres} runtime={movie.runtime}/>
                        })}</div>
                </div>
                <div className="Films_main_block">
                    <h1>Топ 20</h1>
                    <div className="Movie_like">
                        {isLoading ? "Loading..." : page.map(movie => {
                            return <Films id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} key={movie.id} rating={movie.rating} large={movie.large_cover_image} genres={movie.genres} runtime={movie.runtime}/>
                        })}</div>
                </div>
                <div className="Films_main_block">
                    <h1>Фильмы для вас</h1>
                    <div className="Movie_like">
                        {isLoading ? "Loading..." : movies.map(movie => {
                            return <Films id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} key={movie.id} rating={movie.rating} large={movie.large_cover_image} genres={movie.genres} runtime={movie.runtime}/>
                        })}</div>
                </div>
               
            </section>
        )
    }
}