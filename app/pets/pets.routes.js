routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
  var header = {
    template: require("../assets/snippets/header.html"),
    controller: function($scope) {
      $scope.getClass = function(path) {
        return $stateProvider.$get().$current.name === path ? "active" : "";
      };
    }
  };
  var footer = {
    template: require("../assets/snippets/footer.html"),
    controller: function($scope) {}
  };
  $stateProvider.state("pets", {
    url: "/",
    views: {
      header: header,
      content: {
        template: require("./pets.html")
      },
      footer: footer
    }
  });

  $stateProvider.state("contact", {
    url: "/contact",
    views: {
      header: header,
      content: {
        template: require("../assets/snippets/contact.html")
      },
      footer: footer
    }
  });

  $stateProvider.state("about", {
    url: "/about",
    views: {
      header: header,
      content: {
        template: require("../assets/snippets/about.html")
      },
      footer: footer
    }
  });
}
