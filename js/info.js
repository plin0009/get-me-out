function addInfoBlock(isWatch, description, message, time, severity) {
  let msDifference = new Date().getTime() - new Date(time).getTime();
  let hourDifference = Math.ceil(msDifference / (1000 * 60 * 60));
  $("<div/>", {
    "class": "infoblock",
    append: [
      $("<div/>", {"class": (isWatch && "watch" || "warning") + " symbol"}),
      $("<div/>", {"class": "middle", append: [
      $("<p/>", {"class": "description", text: description}),
      $("<p/>", {"class": "message", text: message})]}),
      $("<div/>", {"class": "severityfull", width: "100%"}),
      $("<div/>", {"class": "severitybar", width: severity + "%"}),
      $("<p/>", {"class": "time", text: hourDifference + " hours"})],
    appendTo: "#info"
  });
}
