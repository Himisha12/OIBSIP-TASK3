function showHistory() {
    var historyList = document.getElementById("history");
    var showHistoryButton = document.getElementsByClassName("show-history-button")[0];
  
    if (historyList.style.display === "none") {
      historyList.style.display = "block";
      showHistoryButton.textContent = "Hide History";
    } else {
      historyList.style.display = "none";
      showHistoryButton.textContent = "Show History";
    }
  }
  
  function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;
    var convertedTemperature;
    var convertedUnit;
  
    if (unitInput === "celsius") {
      convertedTemperature = (temperatureInput * 9/5) + 32;
      convertedUnit = "°F";
    } else if (unitInput === "fahrenheit") {
      convertedTemperature = (temperatureInput - 32) * 5/9;
      convertedUnit = "°C";
    } else if (unitInput === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      convertedUnit = "K";
    }
  
    var resultBox = document.getElementById("result-box");
resultBox.textContent = convertedTemperature.toFixed(2) + convertedUnit;
resultBox.classList.add("result-box");

  
    var conversionText = temperatureInput +" "+ unitInput.toUpperCase() + " is " + convertedTemperature.toFixed(2) + convertedUnit;
    var historyItem = document.createElement("li");
    historyItem.appendChild(document.createTextNode(conversionText));
    document.getElementById("history").appendChild(historyItem);
  }
  