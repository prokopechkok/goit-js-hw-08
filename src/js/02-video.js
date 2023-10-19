import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(
  Number(JSON.parse(localStorage.getItem('videoplayer-current-time')))
);

const onTimeUpdate = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
