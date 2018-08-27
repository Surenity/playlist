fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    var finalPlaylist = [];

    console.log(finalPlaylist);
