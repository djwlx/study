#python百度ai的身份证识别代码
from aip import AipOcr

# 定义常量
APP_ID = '20355638' #你百度帐号上的APP_ID
API_KEY = 'SGexNbadG270ofuXDC6l9opv' #你百度帐号上的API_KEY
SECRET_KEY = 'XFevBU0BsBvWgHtDhSZXFeARXkdU5MRw'#你百度帐号上的SECRET_KEY

# 初始化AipFace对象
client = AipOcr(APP_ID, API_KEY, SECRET_KEY)

""" 读取图片 """
def get_file_content(filePath):
    with open(filePath, 'rb') as fp:
        return fp.read()

image = get_file_content('./1.jpg')#将左侧括号内1.jpg替换为待识别的图片路径
idCardSide = "front"
print(type(image))
""" 调用身份证识别 """
result=client.idcard(image, idCardSide)


print("姓名：",result['words_result']["姓名"]["words"])
print("性别：",result['words_result']["性别"]["words"])
print("民族：",result['words_result']["民族"]["words"])
print("生日：",result['words_result']["出生"]["words"])
print("身份证号：",result['words_result']["公民身份号码"]["words"])
print("住址：",result['words_result']["住址"]["words"])