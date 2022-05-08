import cv2
import numpy as np

def test10():
    img = cv2.imread("aaaa.jpg", cv2.IMREAD_UNCHANGED)
    rows, cols, chn = img.shape
    # 加噪声
    for i in range(5000):
        x = np.random.randint(0, rows)
        y = np.random.randint(0, cols)
        img[x, y, :] = 255
    cv2.imshow("demo", img)
    if cv2.waitKey(0) == 27:
        cv2.destroyWindow("demo")

test10()