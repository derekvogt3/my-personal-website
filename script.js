function myFunction() {
  var viewMore = document.getElementById("viewMore");
  var moreText = document.getElementById("more");

  if (viewMore.style.display === "none") {
    viewMore.style.display = "inline";
    moreText.style.display = "none";
  } else {
    viewMore.style.display = "none";
    moreText.style.display = "inline";
  }
}
