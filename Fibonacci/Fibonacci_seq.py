def Fib(n, memo):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = Fib(n - 1, memo) + Fib(n - 2, memo)
    return memo[n]

Fib(12, {})
