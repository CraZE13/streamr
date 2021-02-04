const StreamrClient = require('streamer-client');

var STREAM_KEY = '0xef2d55f528afa39a07940b324ac9827d5ffa3dc9';
var STREAM_ID = 'UpHealth';

const client = new StreamrClient({
  auth:{
    privateKey: STREAM_KEY,
  }
});

const message = {
  temperature:25.4,
  humidity:10,
  happy:true
};

client.publish(STREAM_ID, message);
