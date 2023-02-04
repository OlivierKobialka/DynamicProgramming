class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x)[::-1] == str(x)


#! SOLUTION 2
# class Solution:
#     def isPalindrome(self, x: int) -> bool:
#         xx = str(x);
#         ll = int(len(xx)/2);

#         for i in range(ll):
#             if(xx[i] != xx[-i-1]):
#                 return False;
#         return True;
