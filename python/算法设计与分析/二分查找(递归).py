

def search(list,left,right,number):  
    middle= int((right+left)/2)  

    print("左",left,"中",middle,"右",right)

    if list[middle]==number:
        print(middle)
        return middle
    else:
        if list[middle]<number:
            #是否有必要
            # if left==middle:
            #     return search(list,middle+1,right,number)  
            return search(list,middle,right,number)
        else:
           
            return search(list,left,middle,number)




list=[1,3,5,6,9,10,15,16,19,21]
left=0
right=len(list)-1  #9

number=21
result=search(list,left,right,number)
print(result)

