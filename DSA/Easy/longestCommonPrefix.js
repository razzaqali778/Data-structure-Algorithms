//14

function longestCommonPrefix (strs){
  let pre = strs[0];

  for (let word of strs) {
    for (let i = pre.length - 1; i >= 0; i--) {
      if (pre[i] !== word[i]) {
        pre = pre.slice(0, i);
      }
    }
  }

  return pre;
}


/////////////////////////////////////////////////////////

const longestCommonPrefix=(strs)=>{
 if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (const word of strs) {
        prefix = prefix.split('').filter((char, i) => char === word.charAt(i)).join('');
        
        if (prefix === "") {
            break;
        }
    }

    return prefix;
}


