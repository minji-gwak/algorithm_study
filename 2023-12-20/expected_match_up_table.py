import math

def solution(n,a,b):
    rnd = 0
    while a != b:
        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        rnd += 1

    return rnd