import pymysql


db = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
cursor = db.cursor()
sql = "select * from students where sno='55'"
cursor.execute(sql)
result=cursor.fetchone()
print(result)
db.close()






