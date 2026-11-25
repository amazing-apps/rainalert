// Language switch: English / Ukrainian. English by default; the visitor's
// choice is remembered. Without JavaScript the page is English.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("tokani-lang"); } catch (e) {}
  var lang = saved === "uk" ? "uk" : "en";
  var params = new URLSearchParams(location.search);
  if (params.get("lang") === "en" || params.get("lang") === "uk") lang = params.get("lang");
  root.setAttribute("lang", lang);

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-set]");
    if (!button) return;
    var next = button.getAttribute("data-set");
    root.setAttribute("lang", next);
    try { localStorage.setItem("tokani-lang", next); } catch (e) {}
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
