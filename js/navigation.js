$(document).ready(function () {
  $(document).ready(function () {
    // Get the current URL path
    var url = window.location.pathname;

    // Get the active tab based on the current URL path
    $(".nav-link").each(function () {
      var tabHref = $(this).attr("href");
      if (url === '/' && tabHref === '/') {
        $(this).addClass('active');
      } else if (url.indexOf(tabHref) !== -1) {
        $(".nav-link").removeClass("active");
        $(this).addClass('active');
      }
    });

    // Add click event listener to all nav links
    $(".nav-link").on("click", function () {
      // Remove active class from all nav links
      $(".nav-link").removeClass("active");
      // Add active class to the clicked nav link
      $(this).addClass("active");
    });
  });
});
