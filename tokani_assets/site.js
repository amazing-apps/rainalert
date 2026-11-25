// Language switch: Ukrainian / English. Remembers the choice; the first
// visit follows the browser language. Without JavaScript the page is Ukrainian.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("tokani-lang"); } catch (e) {}
  var browser = (navigator.language || "uk").toLowerCase();
  var lang = saved || (browser.indexOf("uk") === 0 || browser.indexOf("ru") === 0 ? "uk" : "en");
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
