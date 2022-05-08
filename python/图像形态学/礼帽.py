import numpy as np
import cv2 as cv
#礼帽，小线条
#礼帽=原始输入-运算结果
img1=cv.imread("aa.jpg",0)
ret,img2=cv.threshold(img1,127,255,cv.THRESH_BINARY_INV)
kernel=np.ones((3,3),np.uint8)

#礼帽
tophat=cv.morphologyEx(img2,cv.MORPH_TOPHAT,kernel)

#在图像上添加文本，方便分清每个操作相对应的图像
cv.putText(img1,"original",(150,230),cv.FONT_HERSHEY_COMPLEX,1,(0,0,255),2,8)

#将原图像和礼帽运算操作的图像放在同一个窗口显示
glay=np.hstack((img1,tophat))
cv.imshow("glay",glay)
cv.waitKey(0)
cv.destroyAllWindows()