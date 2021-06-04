function hamburgerNav() {
    var x = document.getElementById("hamNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }
