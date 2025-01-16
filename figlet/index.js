var figlet = require("figlet");

figlet("MOHSIN ALI SHAKIR", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});