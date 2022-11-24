import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(playerEl);

function onTimeUpdate(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));
if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
};
