const s = 'anagram';
const t = 'nagaram';

function isAnagram(s: string, t: string): boolean {
  let sresult = '';
  let tresult = '';
  for (let i = s.length - 1; i >= 0; i--) {
    sresult += s[i]
    tresult += t[i]
  }
  //console.log(sresult, tresult);

  if (sresult === tresult) {
    return true
  }  
  return false;
};
isAnagram(s, t)
'anagram';
'nagaram';