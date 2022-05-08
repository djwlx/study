import numpy as np

def bag(weight,value,weight_most):
    num = len(weight)
    weight.insert(0,0)#前0件要用
    value.insert(0,0)#前0件要用
    bag=np.zeros((num+1,weight_most+1),dtype=np.int32)#下标从零开始
    for i in range(1,num+1):
        for j in range(1,weight_most+1):
            if weight[i]<=j:
                bag[i][j]=max(bag[i-1][j-weight[i]]+value[i],bag[i-1][j])
            else:
                bag[i][j]=bag[i-1][j]
    return bag




weight=[2,2,6,5,4]
value=[3,6,5,4,6]
weight_most=10
result=bag(weight,value,weight_most)
print(result)


list=[]
length=len(result[0])-1
for i in range(len(value)-1,0,-1):
   if(result[i][length]!=result[i-1][length]):
       list.append(i)
       length-=weight[i]
print(list)
       
