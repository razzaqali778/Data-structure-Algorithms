//929

var numUniqueEmails = function(emails) {
  const valid=emails.map(email=>{
       const [local, domain] = email.split('@');
       return local.split('+').shift().split('.').join('')+'@'+domain;
   });
   const set=new Set(valid)
    
    return set.size
      
    
};


//////////////////////////////

const numUniqueEmails = (emails) => {
    const uniqueEmails = new Set();

    for (const email of emails) {
        const [local, domain] = email.split('@');
        const simplifiedLocal = simplifyLocal(local);
        const simplifiedEmail = simplifiedLocal + '@' + domain;
        uniqueEmails.add(simplifiedEmail);
    }

    return uniqueEmails.size;
};

const simplifyLocal = (local) => {
    let simplified = '';
    
    for (let i = 0; i < local.length; i++) {
        if (local[i] === '+') {
            break;
        } else if (local[i] !== '.') {
            simplified += local[i];
        }
    }
    
    return simplified;
};





