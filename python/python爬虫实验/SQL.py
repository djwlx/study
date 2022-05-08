import pymysql
def insert(list,length):
    db = pymysql.connect(host="localhost", user="root", passwd="123", database="test", port=3306, charset="utf8")
    cursor = db.cursor()
    for i in list[0:length]:
        sql="insert into school values(%s,'%s','%s','%s','%s')" % (i[0],i[1],i[2],i[3],i[4])
        cursor.execute(sql)
        db.commit()
    cursor.close()
    db.close()