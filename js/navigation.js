$(document).ready(function () {
  // Get the current URL path
  var url = window.location.pathname;

  // Get the active tab based on the current URL path
  $(".nav-link").each(function () {
    var tabHref = $(this).attr("href");

    if (
      window.location.pathname === `/${tabHref}` ||
      ((url === "/index.html" || url === "/") && tabHref === "/")
    ) {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });
/*
  // Add click event listener to all nav links
  $(".nav-link").on("click", function (e) {
    // Check if the clicked link is the language switcher
    if ($(this).data("tab") === "language") {
      e.preventDefault(); // prevent default link behavior

      // Get the current URL and split it into an array of path segments
      var currentUrl =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html"
          ? `${window.location.href}/index.fr.html`
          : window.location.href;
      var pathSegments = currentUrl.split("/");

      var newUrl = pathSegments[pathSegments.length - 1].split(".");

      // Get the current language from the last path segment
      var currentLanguage = newUrl[1];

      // Determine the new language and construct the new URL
      var newLanguage = currentLanguage === "fr" ? "el" : "fr";
      newUrl[1] = newLanguage;

      // Redirect to the new URL
      window.location.href =
        newUrl.join(".") === "index.fr.html" ? "index.html" : newUrl.join(".");
    }
  });
  */
});
