const makeSpinner = () => {
  const cursorPositions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ', '\r/   ', '\r-   ', '\r\\   \n'];
  let interval = 100;
  for (const char of cursorPositions) {
    setTimeout( () => {
      process.stdout.write(char)
    }, interval)
    interval += 200;
  }
};

makeSpinner();
