// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

const findAnagrams = (s, p) => {
  let map = {}
      let map2 = {}
      const res = []
      let track = (fm,sm) =>{
          for(let i in fm){
              if(!sm[i]) return false;
              if(sm[i] != fm[i]) return false;
          }
          return true;
      }
    
    for(let i =0; i<p.length;i++){
        map[p[i]] = (map[p[i]] || 0) + 1;
        map2[s[i]] = (map2[s[i]] || 0) + 1;
    }
    
    
    for(let i =0; i<=s.length - p.length; i++){
        if(track(map,map2)) res.push(i);
        map2[s[i+p.length]] = (map2[s[i+p.length]] || 0) + 1;
        map2[s[i]]--
    }
    return res;
}

findAnagrams("baa", "aa")