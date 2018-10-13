function addInfo(isWatch, description, message, time, severity) {/*
  let block = document.createElement("div");
  block.className = (isWatch && "watch" || "warning") + " block";
  let descBlock = document.createElement("p");
  descBlock.innerHTML = description;
  let messageBlock = document.createElement("p");
  messageBlock.innerHTML = message;*/
  $("<div/>", {
    "class": (isWatch && "watch" || warning) + " block",
    append: [
      $("<p/>", {text: description, "class": "description"}),
      $("<p/>", {text: message, "class": "message"})],
    appendTo: "#info"
  });
  console.log(time, severity);
}
