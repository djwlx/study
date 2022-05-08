
import copy

def xuan(p, q):
    s = q | p
    s_ = copy.copy(s)
    for m in s_:
        for n in s_:
            if m[0] >= n[0] and m[1] < n[1]:
                   s.remove(m)
                   break
    return s

def bag(w, v, x):
    a = len(w)+1
    p = [0]*a
    q = [set()]*a
    p[0] = {(0, 0)}
    for i in range(1, a):
        for j in p[i-1]:
            m = j[0] + w[i-1]
            n = j[1] + v[i-1]
            if m <= x:
                q[i-1].add((m, n))
        p[i] = xuan(p[i-1], q[i-1])
    for i in p:
        print(i)
    max = (0, 0)
    for i in p[a-1]:
        if max[1] <= i[1]:
            max = i 
    max_ = max
    list = []
    for i in range(a-2, -1, -1):
        m = max[0]-w[i]
        n = max[1]-v[i]
        if (m, n) in p[i]:
            list.append(i+1)
            max = [m, n]
    list = list[::-1]
    for i in list:
        print(i, end=' ')
    print()
    print( max_[1])


def main():
    weight = [2,2, 6,5, 4]
    value = [3,6,5,4,6]
    total = 10
    bag(weight, value, total)
main()
