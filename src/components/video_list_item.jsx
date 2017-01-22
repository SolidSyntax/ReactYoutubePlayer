import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
    // const video = props.video;
    // replaced by ({video}) (es6 syntax, destructuring)
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>

        </li>
    )
};

export default VideoListItem