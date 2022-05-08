def search(list,left,right,number):
    result=0
    while left<=right:
        middle=int((left+right)/2)
        if list[middle]==number:
            result=middle;
            break;
        elif list[middle]<number:
            if left==middle:
                left=middle+1
            else:
                left=middle
        elif list[middle]>number:
            right=middle
    return result




list=[1,3,4,6,9,10,15,16,19,20]
left=0
right=len(list)-1
number=20
result=search(list,left,right,number)
print(result)