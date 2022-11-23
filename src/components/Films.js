import React from "react";
import "./css/Films.css";
import { Link } from "react-router-dom";

function Films({ id, year, title, poster, rating, large, genres, summary, runtime}){
    return (
        <Link to={"/Newfilms"} state={{id:id, summary:summary, genres:genres,runtime:runtime, year:year, title:title, poster:poster,rating:rating, large:large}}>
            <div className="Film__block">
                <div className="rating">{rating}</div>
                <img src={poster} alt="poster" />
            </div>
        </Link>
    )
}
export default Films