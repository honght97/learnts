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
const currentPromise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
const currentPromise3 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

const executeAsync = async () => {
  try {
    const data = await currentPromise;
    document.getElementById("img_4").setAttribute("src", data.responseURL);
    const data2 = await currentPromise2;
    document.getElementById("img_5").setAttribute("src", data2.responseURL);
    const data3 = await currentPromise3;
    document.getElementById("img_6").setAttribute("src", data3.responseURL);
  } catch (err) {
    console.log(err);
  }
};
executeAsync();
currentPromise
  .then((data) => {
    document.getElementById("img_1").setAttribute("src", data.responseURL);
    return currentPromise2;
  })
  .then((data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);
    return currentPromise3;
  })
  .then((data) => {
    document.getElementById("img_3").setAttribute("src", data.responseURL);
  })
  .catch((err) => {
    console.log(err);
  });
