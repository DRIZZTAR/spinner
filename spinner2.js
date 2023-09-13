const spinnerString = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   '];

for (let i = 0; i < spinnerString.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerString[i]);
    //i is our index of the character of sentence being looped through, for each index it wil be multplied by 200ms to give each index the correct time delay, 200ms apart
  }, i * 200);
}