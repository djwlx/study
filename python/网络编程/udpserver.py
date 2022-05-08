#服务器端Socket程序
from socket import *
#定义套接字信息
HOST = 'localhost'
PORT = 50000
#定义接收缓存大小
BUFF = 1024
#创建套接字
udpServer=socket(AF_INET,SOCK_DGRAM)
#绑定套接字信息
udpServer.bind((HOST,PORT))

#循环读取客户端发送的数据，然后回送客户端
while True:
        print('等待客户端发送数据......')
        data_recv,addr = udpServer.recvfrom(BUFF)                
        print(data_recv.decode())        
        udpServer.sendto(data_recv,addr)

#关闭服务器，释放连接
udpServer.close()

