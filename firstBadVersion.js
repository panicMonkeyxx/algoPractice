/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    
   
    
    return function(n) {
       //if isBadVersion(n) === false decrement n until it is true...
        //return the last false number
      //if isBadVersion(n) === true, increment n until it is false
        //first false number is a bad version
      //
        let min = 0;
        let max = n;
        let findMid = (num) =>Math.floor((num - min) /2 + min);
        let mid = findMid(max);
        
        while (min <= max){
            if(isBadVersion(mid)){
                max = mid-1;
                mid = findMid(max);
            } else {
                min = mid +1;
                mid = findMid(max);
            }
            
        }
        return mid+1;
       
    
        
    };
};