import functools


@functools.cache
def gridTraveler(m, n):
    if m == 1 and n == 1:
        return 1
    elif m == 0 or n == 0:
        return 0
    else:
        return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)


print(gridTraveler(18, 18))
