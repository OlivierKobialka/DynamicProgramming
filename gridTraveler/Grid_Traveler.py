import functools

n = int(input("Enter the number of rows: "))
m = int(input("Enter the number of columns: "))

@functools.cache
def gridTraveler(m, n):
    if m == 1 and n == 1:
        return 1
    elif m == 0 or n == 0:
        return 0
    else:
        return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)

print(gridTraveler(m, n))
