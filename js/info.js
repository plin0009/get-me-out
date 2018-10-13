function addInfoBlock(isWatch, description, message, time, severity) {
  let msDifference = new Date().getTime() - new Date(time).getTime();
  let hourDifference = Math.ceil(msDifference / (1000 * 60 * 60));
  $("<div/>", {
    "class": "infoblock",
    append: [
      $("<div/>", {"class": (isWatch && "watch" || "warning") + " symbol"}),
      $("<div/>", {append: [
      $("<p/>", {"class": "description", text: description}),
      $("<p/>", {"class": "message", text: message})]}),
      $("<p/>", {"class": "severity", text: severity}), // change to bar later
      $("<p/>", {"class": "time", text: hourDifference + " hours"})],
    appendTo: "#info"
  });
}
