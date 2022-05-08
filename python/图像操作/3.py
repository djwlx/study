import cv2
import matplotlib.pyplot as plt
def test12():
    img = cv2.imread("bbbb.jpg")
    source = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    # 方框滤波
    result = cv2.boxFilter(source, -2, (5, 5), normalize=1)
    # 显示图像
    title = ["demo1", "demo2"]
    imgs = [source, result]
    for i in range(2):
        plt.subplot(1, 2, i+1), plt.imshow(imgs[i], "gray")
        plt.title(title[i])
        plt.xticks([])
        plt.yticks([])
    plt.show()

test12()