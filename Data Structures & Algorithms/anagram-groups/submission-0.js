class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const map = new Map()   //key valuee array
      for (let i =0 ;i<=strs.length-1;i++){
         const key = strs[i].split('').sort().join('');

         if(!map.has(key)){
            map.set(key,[]);    // set to add to map 
         }

map.get(key).push(strs[i]);
      }
      return Array.from(map.values());


}
}