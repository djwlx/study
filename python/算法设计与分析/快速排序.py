
# 填坑法
def quick1(list):
    head=0   #头部节点  
    end=len(list)-1  #尾部节点
    pivot=list[0]   #基准点
    keng=pivot
    while(end>=head):
        if list[end]>pivot:
            end=end-1
        else :
            keng=list[end]

        if list[head]<pivot:
            head=head+1
        else :
            keng=list[head]


    return pivot


#指针交换法
def quick2(list):
    return 0



list=[7,8,5,2,9,6,3,1]
result1=quick1(list)
result2=quick2(list)
print(result1)