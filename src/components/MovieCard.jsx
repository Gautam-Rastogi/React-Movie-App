import { Link } from "react-router-dom";


function MovieCard({ title, year, poster }) {
    return (
        <>
            <Link to={`details/${title}`}>
                <div className="w-44 bg-orange-50 mb-4 rounded-lg p-3">
                    <img src={poster} className="w-full h-52 object-contain " alt="" />
                    <h2 className="text-lg font-bold mt-2 truncate">{title}</h2>
                    <p className="text-sm text-gray-500 truncate">{year}</p>
                </div>
            </Link>
        </>
    );
}

export default MovieCard;