import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
});

const getCurrentTime = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(currentTime);
