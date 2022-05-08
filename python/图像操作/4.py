import cv2
def test13():
    img = cv2.imread("bbbb.jpg")
    # 高斯滤波
    result = cv2.medianBlur(img, 5)
    cv2.imshow("demo1", img)
    cv2.imshow("demo2", result)
    if cv2.waitKey(0) == 27:
        cv2.destroyWindow("demo1")
        cv2.destroyWindow("demo2")
test13()