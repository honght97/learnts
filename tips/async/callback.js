function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      // chờ khi request trả về thành công mời thực thi callback
      callback(xmlHttp);
    }
  };

  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}
httpGetAsync("https://picsum.photos/200/300", (data) => {
  console.log(data);
  document.getElementById("img_1").setAttribute("src", data.responseURL);
  // sau khi có dữ liệu từ api => tiếp tục yêu cầu 1 request khác trong callback
  httpGetAsync("https://picsum.photos/200/300", (data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);
    httpGetAsync("https://picsum.photos/200/300", (data) => {
      document.getElementById("img_3").setAttribute("src", data.responseURL);
    });
  });
  // => đang nồng rất nhiều callback vào với nhau  => việc call 1 api cần dữ liệu trả về của 1 api khác
  //=> khi viết cần nồng rất nhiều callback vào nhau
  // => code khó đọc => rất khó maintain
  // => để giải quyết vấn đề này => promise
});
/**
 * - sẽ không thực thi đoạn code để console.log(data) ngay lập tức
 * ===> chờ khi 1 request trả về thành công => mới thực thi callback
 */
