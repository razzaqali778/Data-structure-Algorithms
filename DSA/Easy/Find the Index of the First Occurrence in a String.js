//28

function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}


////////////////////////////////////////


function strStr(haystack, needle) {
  const haystackLen = haystack.length;
  const needleLen = needle.length;

  for (let i = 0; i <= haystackLen - needleLen; i++) {
    if (haystack.substring(i, i + needleLen) === needle) {
      return i;
    }
  }

  return -1;
}







