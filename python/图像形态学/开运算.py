import numpy as np
import cv2 as cv
#开运算
#先腐蚀，再膨胀
img1=cv.imread("aa.jpg",0)
#反二值化，小于127设为255，即黑变白；大于127的设为 0，即白变黑。
ret,img2=cv.threshold(img1,127,255,cv.THRESH_BINARY_INV)

#定义一个3*3的卷积核
kernel=np.ones((3,3),np.uint8)

#开运算
opening2=cv.morphologyEx(img2,cv.MORPH_OPEN,kernel)

#在图像上添加文本，方便分清每个操作相对应的图像
cv.putText(img1,"original",(150,230),cv.FONT_HERSHEY_COMPLEX,1,(0,0,255),2,8)

#将原图像和开运算操作的图像放在同一个窗口显示
glay=np.hstack((img1,opening2))
cv.imshow("glay",glay)
cv.waitKey(0)
cv.destroyAllWindows()