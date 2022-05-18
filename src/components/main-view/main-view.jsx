// myFlix-client/src/main-view/main-view.jsx

import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

//getting array of movies from remote and displaying as a list
export class MainView extends React.Component {
    constructor() {
        super();
        //initial state for main-view
        this.state = {
            movies: [],
            selectedMovie: null,
            registered: null,
            user: null,
        };
    }
    componentDidMount() {
        axios.get('https://[APP-NAME].herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

    onLoggedIn(user) {
        this.setState({
            user,
        });
    }

    onRegister(registered) {
        this.setState({
            registered,
        });
    }

    render() {
        const { movies, selectedMovie, user, registered } = this.state;

        //forcing a registration form for testing
        if (registered) {
            return <RegistrationView onRegister={(bool) => this.onRegister(bool)} />;
        }

        //if user is no logged in - force a login form
        if (!user) {
            return (
                <LoginView
                    onLoggedIn={(user) => this.onLoggedIn(user)}
                    onRegister={(bool) => this.onRegister(bool)}
                />
            );
        }

        if (movies.length === 0)
            return <div className="main-view">The list is empty</div>;

        //if no movie is selected show the list -
        //if a movie is selected show the Movie View details
        return (
            <div className="main-vew">
                {selectedMovie ? (
                    <MovieView
                        movie={selectedMovie}
                        onBackClick={(newSelectedMovie) => {
                            this.setSelectedMovie(newSelectedMovie);
                        }}
                    />
                ) : (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                            onMovieClick={(movie) => {
                                this.setSelectedMovie(movie);
                            }}
                        />
                    ))
                )}
            </div>
        );
    }
}