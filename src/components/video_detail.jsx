import React from 'react';


// Functional, lightweight component
// Does not contain state
const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const title = video.snippet.title;
    const videoId = video.id.videoId;

    //Template literal
    //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    return (

        <div className="video-detail col-md-10">
            <div className="details">
                <div>{title}</div>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

        </div>

    )
};

export default VideoDetail;