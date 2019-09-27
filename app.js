Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://172.16.16.102/playlist.m3u',
  wsPort: 5554,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})


// const onvif = require('node-onvif');

// // Create an OnvifDevice object
// let device = new onvif.OnvifDevice({
//   xaddr: 'http://192.168.10.14:10080/onvif/device_service',
//   user : 'admin',
//   pass : 'admin'
// });

// device.init().then(() => {
//     // Get the UDP stream URL
//     let url = device.getUdpStreamUrl();
//     console.log(url);
//   }).catch((error) => {
//     console.error(error);
//   });