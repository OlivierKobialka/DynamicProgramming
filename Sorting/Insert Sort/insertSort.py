def insertSort(array):
    if (n := len(array)) <= 1:
        return
    for i in range(1, n):
        temp = array[i]

        j = i - 1
        while j >= 0 and temp < array[j]:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = temp


def InsertSort2(array):
    i = 1
    while i < len(array):
        j = i
        while j > 0 and array[j] < array[j - 1]:
            array[j], array[j - 1] = array[j - 1], array[j]
            j -= 1
        i += 1
