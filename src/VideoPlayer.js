// import React, { useState, useRef } from 'react';
// import VideoPlayer from 'react-video-js-player';

// const VideoApp = () => {
//     const playerRef = useRef(null);
//     const [video, setVideo] = useState({
//         src: "http://www.example.com/path/to/video.mp4",
//         poster: "http://www.example.com/path/to/video_poster.jpg"
//     });

//     const onPlayerReady = (player) => {
//         console.log("Player is ready: ", player);
//         playerRef.current = player;
//     };

//     const onVideoPlay = (duration) => {
//         console.log("Video played at: ", duration);
//     };

//     const onVideoPause = (duration) => {
//         console.log("Video paused at: ", duration);
//     };

//     const onVideoTimeUpdate = (duration) => {
//         console.log("Time updated: ", duration);
//     };

//     const onVideoSeeking = (duration) => {
//         console.log("Video seeking: ", duration);
//     };

//     const onVideoSeeked = (from, to) => {
//         console.log(`Video seeked from ${from} to ${to}`);
//     };

//     const onVideoEnd = () => {
//         console.log("Video ended");
//     };

//     return (
//         <div>
//             <VideoPlayer
//                 controls={true}
//                 src={video.src}
//                 poster={video.poster}
//                 width="720"
//                 height="420"
//                 onReady={onPlayerReady}
//                 onPlay={onVideoPlay}
//                 onPause={onVideoPause}
//                 onTimeUpdate={onVideoTimeUpdate}
//                 onSeeking={onVideoSeeking}
//                 onSeeked={onVideoSeeked}
//                 onEnd={onVideoEnd}
//             />
//         </div>
//     );
// };

// export default VideoApp;