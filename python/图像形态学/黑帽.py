import numpy as np
import cv2 as cv
#黑帽。只能看见大概轮廓
#黑帽=闭运算-原始输入
img1=cv.imread("aa.jpg",0)
ret,img2=cv.threshold(img1,127,255,cv.THRESH_BINARY_INV)
kernel=np.ones((3,3),np.uint8)

#黑帽
blackhat=cv.morphologyEx(img2,cv.MORPH_BLACKHAT,kernel)

#在图像上添加文本，方便分清每个操作相对应的图像
cv.putText(img1,"original",(150,230),cv.FONT_HERSHEY_COMPLEX,1,(0,0,255),2,8)

#将原图像和开运算操作的图像放在同一个窗口显示
glay=np.hstack((img1,blackhat))
cv.imshow("glay",glay)
cv.waitKey(0)
cv.destroyAllWindows()