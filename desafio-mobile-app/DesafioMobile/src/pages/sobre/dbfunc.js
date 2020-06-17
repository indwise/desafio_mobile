export function successCB() {
  console.log("SQL executed fine");
};

export function errorCB(err) {
  console.log("SQL Error: " + err);
};

export function openCB() {
  console.log("Database OPENED");
}
