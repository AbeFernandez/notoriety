function changeColor() {
  var blueDiv = document.getElementById("changeable");
  // Use the Mozilla Developer Network resource to find the right way to change
  // the background for this div 
  blueDiv.setAttribute("class","green half");
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "f927190d88msh42b85317e769437p120011jsn718ac18c7b83",
    },
  })
    .then((response) => {
      response.json().then((responseBody) => {
        console.log(responseBody.word);
        wordable.textContent = responseBody.word
      });
      
    })
    .catch((err) => {
      console.error(err);
    });
}
