import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
class MainView extends React.Component {


    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    ))
                }
            </div>
        );
    }
}

export default MainView;
    /*    render() {
    return (
        <div className="main-view">
            <div>Inception</div>
            <div>The Shawshank Redemption</div>
            <div>Gladiator</div>
        </div>
    );
}
}

export default MainView; */