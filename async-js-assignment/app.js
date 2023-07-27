$("#singleNumberRequester").on("submit", function (e) {
  e.preventDefault();
  number = $("input[name=fav-number]").val();
  times = parseInt($("input[name=total-times]").val());
  let data = [];
  let bigString = "";

  for (let i = 0; i < times; i++) {
    console.log(i);

    $.getJSON(`http://numbersapi.com/${number}?json`, (res) => {
      console.log(res);
      text = res.text;
      bigString += `<p>${text}</p>`;
      if (i == times - 1) {
        $(bigString).appendTo("#single-fact-holder");
      }
    });
  }
});

$("#multipleNumbersRequester").on("submit", function (e) {
  $("span[data-mark=True]");
});

$("#number-prep").on("click", function (e) {
  e.preventDefault();
  console.log("reach");
  numberToAdd = $("#number-to-add").val();
  $(`<div class="mt-3 row justify-content-center">
            <div class="col-2">
                <span data-mark='True' > ${numberToAdd} </span> 
            </div>
            <div class="col-2">
                <button class='btn btn-danger'> Delete </button> 
            </div>
        <br>`).appendTo("#multi-number-holder");
});

$("#multipleNumberRequester").on("submit", function (e) {
  e.preventDefault();
  data = $("span[data-mark='True']");
  let queryData = [];
  let queryString = "";
  for (let x of data) {
    queryData.push(x.innerHTML.trim());
  }
  console.log(queryData);
  for (let x in queryData) {
    if (x != queryData.length - 1) {
      queryString += `${queryData[x]},`;
    } else {
      queryString += queryData[x];
    }
  }
  let bigString = "";

  $.getJSON(`http://numbersapi.com/${queryString}?json`, (res) => {
    console.log(res);
    text = res.text;
    for (let x in res) {
      bigString += `<p>${res[x]}</p>`;
    }

    $(bigString).appendTo("#multi-fact-holder");
  });
});
$(document).ready(function (e) {
  console.log("loaded");
});

$.getJSON("http://numbersapi.com/42?json", (res) => console.log(res));
