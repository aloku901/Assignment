
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File not found!");
    } else {
      console.error(err);
    }
    return;
  }
  console.log(data);
});

const expensiveOperation = () => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  console.log("Expensive operation done");
};

expensiveOperation();
