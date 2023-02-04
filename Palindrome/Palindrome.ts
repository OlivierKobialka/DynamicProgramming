const isPalindrome = (input: number): boolean => {
    const string = input.toString();
    for (let i = 0, j = string.length - 1; i < j; ++i, --j) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
};