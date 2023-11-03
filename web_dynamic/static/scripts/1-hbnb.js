//Ensure script only runs when dom is loaded

$(document).ready(function () {
  const amenities = {};
  let newList = [];
  const check = $(".amenities", input[type = "checkbox"]);
  check.prop("checked", false);
  check.change(function () {
    const dataID = $(this).attr("data-id");
    const dataName = $(this).attr("data-name");
    if (this.checked) {
      amenities[dataID] = dataName;
    } else {
      delete (amenities[dataID]);
    }
    for (const key in amenities) {
      newList.push(amenities[key]);
    }
    const res = amenities.join(", ");
    $("div.amenities > h4").text(res);
    newList = [];
  });
});
