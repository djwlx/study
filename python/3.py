#-*-codeing=utf-8-*-
#@Time : 2020/12/2 15:57
#@Author:王紫微
#@File:3.py.py
#@Software:PyCharm
import random
offices=[[],[],[]]
teaches=['A','B','C','D','E','F']
for teach in teaches:
    a=random.randint(0,2)
    offices[a].append(teach)
i=1
for office in offices:
    print('办公室%d的人数为： %d'%(i,len(office)))
    print(office)
    i+=1
    # for teach in offices:
    #     print("%s"%teach,end="\t")
    # print("\n")





