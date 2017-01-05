$(document).ready(function() {

  $(".submit").click(function(e) {
    e.preventDefault();
    $("img").remove();
    $(".title").html("");
    $(".list").html("");
    var searchTerm = $(".search-input").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&limit=10&namespace=0&format=json&callback=?";

  var searchQuery;
  $.ajax( {
    url: url,
    async: false,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
      var searchResults = data;
      var searchQuery = searchResults[0];
      var searchTopics = searchResults[1];
      var searchSummaries = searchResults[2];
      var searchLinks = searchResults[3];
      console.log(searchSummaries[0]);

      $(".title").html(searchQuery);
      for (var i = 0; i < searchTopics.length; i++) {
        $(".list").append("<div class='list-style'><a href='" + searchLinks[i] + "' target='_blank'><li>" + searchTopics[i] + "</li><p>" + searchSummaries[i] + "</p></a></div>")
      }
    }
   })
  });
});
