function loadXMLDoc () {
  var jshttp
  var articleList = ''
  var json
  if (window.XMLHttpRequest) {
    jshttp = new XMLHttpRequest()
  } else {
    jshttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  jshttp.onreadystatechange = function () {
    if (jshttp.readyState === 4 && jshttp.status === 200) {
      json = JSON.parse(jshttp.responseText)
      for (var i = 0; i < json.length; i++) {
        articleList += '<div class="article"><h3>'
        articleList += '<a href="' + json[i].url + '">' + json[i].title + '</a></h3>'
        articleList += '<p><strong>摘要：</strong>' + json[i].summary + '</p>'
        articleList += '<p class="information">' + json[i].posted + '</p>'
        articleList += '<p class="information">' + json[i].views + '</p></div>'
        document.getElementById('main').innerHTML = articleList
      }
      console.log(json.length)
    }
  }
  jshttp.open('get', './js/articleList.json', true)
  jshttp.send()
}
window.onload = loadXMLDoc()
