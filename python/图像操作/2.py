import matplotlib.pyplot as plt
import cv2
def test11():
    img = cv2.imread("bbbb.jpg")
    source = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    # 均值滤波
    result = cv2.blur(source, (5, 5))

    # 显示图像
    title = ["demo1", "demo2"]
    imgs = [source, result]
    for i in range(2):
        plt.subplot(1, 2, i + 1)
        plt.imshow(imgs[i], "gray")
        plt.title(title[i])
        plt.xticks([])
        plt.yticks([])
    plt.show()

test11()