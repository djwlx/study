import flask, json
from flask import request
 
# 创建一个服务，把当前这个python文件当做一个服务
server = flask.Flask(__name__)
@server.route('/test', methods=['get', 'post'])
def test():
    # username = request.values.get('name')
    # pwd = request.values.get('pwd')
    print(request.values)
    return "hello world"
if __name__ == '__main__':
    server.run(debug=True, port=8888, host='0.0.0.0')# 指定端口、host,0.0.0.0代表不管几个网卡，任何ip都可以访问