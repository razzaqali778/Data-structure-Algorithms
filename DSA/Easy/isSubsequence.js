//392

const isSubsequence = (s,t) =>{

  for(let char of s){
    let indexChar = t.indexOf(char);

    if(indexChar === -1){
      return false;
    }

    t = t.slice(indexChae +1)
  }

  return true;
}
