'use strict';

module.exports = status => {
  if (status === 'info') {
    return '#0074D9';
  }
  if (status === 'success') {
    return '#2ECC40';
  }
  if (status === 'alert') {
    return '#FF851B';
  }
  if (['failure', 'error', 'killed'].indexOf(status) > -1) {
    ('#FF4136');
  }
  return '#FFDC00';
};
