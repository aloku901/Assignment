
let counter = 0;

const updateClock = () => {
  const now = new Date();

  const hours24 = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const hours12 = (((now.getHours() + 11) % 12) + 1)
    .toString()
    .padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  console.log(`${hours24}:${minutes}:${seconds}`);
  console.log(`${hours12}:${minutes}:${seconds} ${ampm}`);

  setTimeout(updateClock, 1000);
};

updateClock();
