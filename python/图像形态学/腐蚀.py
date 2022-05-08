import cv2 as cv
import numpy as np
#腐蚀
#读取图像
img1=cv.imread("aa.jpg")

#将图像进行反向二值化操作，即将白色部分变为黑色，黑色部分变为白色
ret,img2=cv.threshold(img1,80,255,cv.THRESH_BINARY_INV)

#定义一个3*3的卷积核
kernel=np.ones((3,3),np.uint8)

#图像腐蚀：cv2.erode(输入图像，卷积核，iterations=腐蚀的次数)
erosion=cv.erode(img2,kernel,iterations=1)

#在图像上添加文本，方便分清每个操作相对应的图像
cv.putText(img1,"original",(150,230),cv.FONT_HERSHEY_COMPLEX,1,(0,0,255),2,8)
cv.putText(erosion,"erosion",(150,230),cv.FONT_HERSHEY_COMPLEX,1,(0,0,255),2,8)

#将原图像和腐蚀操作的图像放在同一个窗口显示
glay=np.hstack((img1,erosion))
cv.imshow("glay",glay)
cv.waitKey(0)
cv.destroyAllWindows()