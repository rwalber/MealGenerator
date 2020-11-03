import React from 'react';
import Youtube from 'react-youtube';

export default function Video( {url} ) {
    
    const videoSettings = {
        height: '490',
        width: '1000',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
        }
    }

    const videoID = url.split('=')[1];

    function onReady(event) {
        event.target.pauseVideo();
    }
    
    return (
        <>
            <Youtube 
                videoId={videoID}
                opts={videoSettings}
                onReady={onReady}
            />
        </>
    )
}