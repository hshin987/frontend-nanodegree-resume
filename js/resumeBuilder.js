$("#main").append("Hyewon Shin");

var formattedName = HTMLheaderName.replace(
  "%data%", Hyewon Shin);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace(
  "%data%", role);
  
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
