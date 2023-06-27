//Maximum Number of Words Found in Sentences



function maxCount(sentences) {
  let maxCount = 0;

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    maxCount = Math.max(maxCount, words.length);
    console.log(words);
  }

  return maxCount;
}

console.log(
  maxCount([
    `alice and bob love leetcode`,
    "i think so too",
    "this is great thanks very much",
  ])
);
