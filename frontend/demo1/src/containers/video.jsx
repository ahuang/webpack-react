import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

if(process.env.NODE_ENV === 'development'){
    require('../mockData/movie.js');
}

export default class Video extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        let topMovieUrl = '/api/v1/movies';
        axios.get(topMovieUrl).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <p>视频展示</p>
            </div>
        )
    }
}
