navigator.getUserMedia({ video: true, audio: true }, gotMedia, function () {})
 function gotMedia(stream){

var Peer = require('simple-peer')
var p = new Peer({ initiator: location.hash === '#1', trickle: false ,stream:stream})
 p.on('error', function (err) { console.log('error', err) })
 
p.on('signal', function (data) {
  console.log('SIGNAL', JSON.stringify(data))
  document.querySelector('#outgoing').textContent = JSON.stringify(data)
})
 
document.querySelector('form').addEventListener('submit', function (ev) {
  ev.preventDefault()
  p.signal(JSON.parse(document.querySelector('#incoming').value))
})
 
p.on('connect', function () {
  console.log('CONNECT')
  p.send('whatever' + Math.random())
})
 
p.on('data', function (data) {
  console.log('data: ' + data)
})


p.on("stream",function(stream){

var video=document.createElement("video");
document.body.appendChild(video);
video.src=window.URL.createObjectURL(stream);
video.play();

})

}