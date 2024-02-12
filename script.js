// Function to convert currency based on predefined exchange rates
function myFunction() {

  let amountConvert = parseFloat(document.getElementById("do").value);
  let firstMonnaie = document.getElementById("monnaie1").value;
  let secondMonnaie = document.getElementById("monnaie2").value;
  let tdc = [["MAD to USD", 0.10], ["MAD to CAD", 0.13], ["MAD to EGP", 2.99], ["MAD to JPY", 14], ["MAD to EUR", 0.09]];

  // Initialize variables for currency conversion
  let change = 1, amount = 0;

  // Validate input and ensure positive amount and distinct source and target currencies
  if (amountConvert < 0 || firstMonnaie === secondMonnaie)
    alert("Saisissez un nombre positif ou modifiez la devise source !!");
  else {

    for (let i = 0; i < tdc.length; i++) {

      // Check if the conversion pair matches the user's selected currencies
      if (tdc[i][0] === `${firstMonnaie} to ${secondMonnaie}`) {
        change = tdc[i][1];
        amount = amountConvert * change
        break;
      }

      // Check if the inverse conversion pair matches the user's selected currencies
      if (tdc[i][0] === `${secondMonnaie} to ${firstMonnaie}`) {
        change = tdc[i][1];
        amount = amountConvert / change
        break;
      }
    }
  }

  // Update the target field with the converted amount
  document.getElementById("cible").value = amount

}