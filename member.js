function skillsMemeber() {
  var skills = ["HTML", "CSS", "JS"];
  var output = "";
  var i = 0;
  while (i < skills.length) {
    output += "<li>" + skills[i] + "</li>";
    i++;
  }
  document.getElementById("skills").innerHTML = output;
}