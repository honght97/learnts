function httpGetAsync(theUrl, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      resolve(xmlHttp);
    }
  };

  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}
const currentPromise = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
currentPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
