#客户端Socket程序
from socket import *
#定义服务器信息
HOST = 'localhost'
PORT = 50000
#定义接收缓冲区大小
BUFF = 1024
#初始化服务器连接
udpClient=socket(AF_INET,SOCK_DGRAM)

print('成功连接服务器......')
data_send=input('请输入发送信息>')
#循环向服务器发送信息，直至exit结束
while (data_send != 'exit'):	
	udpClient.sendto(data_send.encode(),(HOST,PORT))
	#接收服务器端回送数据并显示
	data_recv,addr=udpClient.recvfrom(BUFF)
	print(data_recv.decode())
	data_send=input('请输入发送信息>')
#关闭客户端，释放连接
udpClient.close()
