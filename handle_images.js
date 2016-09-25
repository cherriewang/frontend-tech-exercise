var gallery = {};

// @param string key, string imageURL
function saveImageURL(key, imageURL){
  gallery[key] = imageURL;
  console.log(gallery[key]);
}

// function openLightBox(){
//   document.getElementById('lightbox').style.display='inline';
// }

// document.getElementById('myLink').onclick = function() {
//   // Do stuff.
//   document.getElementById('lightbox').style.display='inline';
// };