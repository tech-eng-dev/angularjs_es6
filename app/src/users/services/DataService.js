function DataService($http, $sce) {
  return {
    queryData: function(param) {
      return $http
        .get('https://www.slated.com/films/autocomplete/profiles/?term=' + param)
        .then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            response.data[i].image_code = $sce.trustAsHtml(response.data[i].image_code);
          }
          return response.data;
        });
    }
  };
}

export default ['$http', '$sce', DataService];