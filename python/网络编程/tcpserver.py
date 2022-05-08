#服务器端Socket程序
from socket import *
#定义套接字信息
HOST = 'localhost'
PORT = 50000
#定义接收缓存大小
BUFF = 1024
#创建套接字
tcpServer=socket(AF_INET,SOCK_STREAM)
#绑定套接字信息
tcpServer.bind((HOST,PORT))
#定义并发客户端连接数量
tcpServer.listen(5)
print('等待客户端连接......')
#循环读取客户端发送的数据，然后回送客户端
while True:
        tcp_conn,addr=tcpServer.accept()
        print('客户端已经连接:',addr)
        while True:
                data_recv = tcp_conn.recv(BUFF)
                print(data_recv.decode())
                tcp_conn.send(data_recv)
#关闭套接字连接
tcp_conn.close()
#关闭服务器，释放连接
tcpServer.close()
