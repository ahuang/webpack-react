import React from 'react';
import Immutable from 'immutable';
import VideoService from '../services/videoService';


export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: Immutable.fromJS([]),
        };
    }

    componentWillMount() {
        // movie只属于当前组件,因此没有必要放到store上
        VideoService.getMovies().then((data) => {
            if (!!data && !!data.result && !!data.result.length) {
                this.setState({ movies: Immutable.fromJS(data.result) });
            }
        }, (error) => {
            console.log('get movies error: ', error);
        });
    }

    showMoives() {
        const movieList = [];
        this.state.movies.forEach((movie) => {
            movieList.push(<li key={movie.get('name')}>{movie.get('name')} &nbsp;&nbsp;&nbsp;&nbsp; {movie.get('score')}</li>);
        });
        return (<ul>{movieList}</ul>);
    }

    render() {
        return (
            <div>
                <h1>movies have fun!</h1>
                {this.showMoives()}
            </div>
        );
    }
}
