/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let text = x.toString();
    for(var i=0;i<text.length/2;i++)
    {
        if(text.charAt(i) != text.charAt(text.length-1-i))
        {
            return false;
        }

    }
    return true;
};