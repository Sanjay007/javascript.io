export const getReadTime = inputText => {
  inputText = inputText.replace(/(^\s*)|(\s*$)/gi, "");
  inputText = inputText.replace(/[ ]{2,}/gi, " ");
  inputText = inputText.replace(/\n /, "\n");
  console.log(inputText.split(" ").length);
  let wpm = 200;
  let estimatedTime = inputText.split(" ").length / wpm;
  let minutes = Math.round(estimatedTime);

  let effectiveTime = minutes < 1 ? "a couple of secs" : minutes + " min read";
  return effectiveTime;
};
