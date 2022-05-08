from tkinter import *
import pymysql
#删除功能
def delete(root):
    winNew = Toplevel()
    winNew.geometry('300x300')
    winNew.title('删除信息')
    lb2 = Label(winNew, text='请输入你想删除的学生学号')
    lb2.place(relx=0, rely=0)
    xh = Label(winNew, text='学号:')
    xh.place(relx=0.1, rely=0.1)
    inp1 = Entry(winNew)
    inp1.place(relx=0.25, rely=0.1, relwidth=0.5, relheight=0.07)
    btsure = Button(winNew, text='确定', command=lambda :seek2(inp1.get(),winNew,root))
    btsure.place(relx=0.7, rely=0.1)
    btClose = Button(winNew, text='取消', command=winNew.destroy)
    btClose.place(relx=0.82, rely=0.1)
#对数据库进行更新操作
def sqlupdate(sno,sname,sex,age,score,zz,root):
    db = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
    cursor = db.cursor()
    sql="update students set sname=%s,sex=%s,age=%s,score=%s where sno=%s" % (sname,sex,age,score,sno)
    try:
        cursor.execute(sql)
        db.commit()
        lb = Label(zz, text='更新成功')
        lb.place(relx=0.1, rely=0.9)
    except:
        db.rollback()
        lb2 = Label(zz, text='更新失败')
        lb2.place(relx=0.1, rely=0.9)
    db.close()
    show(root,k )
#查询
def seek(sno,winNew,root):
    db = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
    cursor = db.cursor()
    sql = "select * from students where sno=%s" % sno
    try:
        cursor.execute(sql)
        result=cursor.fetchone()
        if result is not None:
            lb=Label(winNew, text='学号/姓名/性别/年龄/成绩')
            lb.place(relx=0.2,rely=0.12)
            lb2 = Label(winNew, text=result)
            lb2.place(relx=0.25, rely=0.17)
            lb3=Label(winNew, text='请重新输入该学生信息:')
            lb3.place(relx=0,rely=0.22)


            xm = Label(winNew, text='姓名:')
            xm.place(relx=0.1, rely=0.32)
            inp2 = Entry(winNew)
            inp2.place(relx=0.2, rely=0.31, relwidth=0.4, relheight=0.06)

            xb = Label(winNew, text='性别:')
            xb.place(relx=0.1, rely=0.42)
            inp3 = Entry(winNew)
            inp3.place(relx=0.2, rely=0.41, relwidth=0.4, relheight=0.06)

            nl = Label(winNew, text='年龄:')
            nl.place(relx=0.1, rely=0.52)
            inp4 = Entry(winNew)
            inp4.place(relx=0.2, rely=0.51, relwidth=0.4, relheight=0.06)

            cj = Label(winNew, text='成绩:')
            cj.place(relx=0.1, rely=0.62)
            inp5 = Entry(winNew)
            inp5.place(relx=0.2, rely=0.61, relwidth=0.4, relheight=0.06)
        else:
            lb4 = Label(winNew, text='没有此项数据')
            lb4.place(relx=0.3, rely=0.3)

    except:

        lb4 = Label(winNew, text='没有此项数据')
        lb4.place(relx=0.3, rely=0.3)
    db.close()

    # 提交数据按钮
    if result is not None:
        bysure = Button(winNew, text='确定',command=lambda: sqlupdate(sno, inp2.get(), inp3.get(), inp4.get(), inp5.get(), winNew, root))
        bysure.place(relx=0.4, rely=0.7)
    # 窗口关闭按钮
    btClose = Button(winNew, text='关闭', command=winNew.destroy)
    btClose.place(relx=0.2, rely=0.7)

def sqldelete(sno,zz,root):
    db = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
    cursor = db.cursor()
    sql = "delete from students where sno=%s" % sno
    try:
        cursor.execute(sql)
        db.commit()
        lb = Label(zz, text='删除成功')
        lb.place(relx=0.1, rely=0.9)
    except:
        db.rollback()
    db.close()
    k=1
    show(root,k)

def seek2(sno,winNew,root):
    db = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
    cursor = db.cursor()
    sql = "select * from students where sno=%s" % sno
    try:
        cursor.execute(sql)
        result = cursor.fetchone()
        if result is not None:
            lb = Label(winNew, text='学号/姓名/性别/年龄/成绩')
            lb.place(relx=0.2, rely=0.2)
            lb2 = Label(winNew, text=result)
            lb2.place(relx=0.25, rely=0.3)
            lb3= Label(winNew, text='确认删除？')
            lb3.place(relx=0.2, rely=0.4)
        else:
            lb4 = Label(winNew, text='没有此项数据')
            lb4.place(relx=0.2, rely=0.2)
    except:
        lb4 = Label(winNew, text='查询错误')
        lb4.place(relx=0.5, rely=0.9)
    db.close()
    if result is not None:
        bysure = Button(winNew, text='确定', command=lambda: sqldelete(sno, winNew,root))
        bysure.place(relx=0.3, rely=0.5, relwidth=0.5, relheight=0.2)


def sqlinsert(sno,sname,sex,age,score,zz,root):
    cc = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
    cursor = cc.cursor()
    sql = "insert into students values(%s,%s,%s,%s,%s)" % (sno,sname,sex,age,score)
    try:
        cursor.execute(sql)
        cc.commit()
        lb = Label(zz, text='插入成功')
        lb.place(relx=0.1, rely=0.9)
    except:
        cc.rollback()
        lb2 = Label(zz, text='插入失败')
        lb2.place(relx=0.1, rely=0.9)
    cc.close()
    show(root,k)

def insert(root):
    winNew = Toplevel()
    winNew.geometry('300x300')
    winNew.title('添加信息')
    lb2 = Label(winNew, text='请输入学生信息')
    lb2.place(relx=0, rely=0)
    #输入要添加的学生信息
    xh=Label(winNew, text='学号:')
    xh.place(relx=0.1, rely=0.1)
    inp1 = Entry(winNew)
    inp1.place(relx=0.2, rely=0.11, relwidth=0.4, relheight=0.06)

    xm = Label(winNew, text='姓名:')
    xm.place(relx=0.1, rely=0.2)
    inp2 = Entry(winNew)
    inp2.place(relx=0.2, rely=0.21, relwidth=0.4, relheight=0.06)

    xb = Label(winNew, text='性别:')
    xb.place(relx=0.1, rely=0.3)
    inp3 = Entry(winNew)
    inp3.place(relx=0.2, rely=0.31, relwidth=0.4, relheight=0.06)

    nl = Label(winNew, text='年龄:')
    nl.place(relx=0.1, rely=0.4)
    inp4 = Entry(winNew)
    inp4.place(relx=0.2, rely=0.41, relwidth=0.4, relheight=0.06)

    cj = Label(winNew, text='成绩:')
    cj.place(relx=0.1, rely=0.5)
    inp5 = Entry(winNew)
    inp5.place(relx=0.2, rely=0.51, relwidth=0.4, relheight=0.06)

#提交数据按钮
    bysure=Button(winNew, text='确定', command=lambda :sqlinsert(inp1.get(),inp2.get(),inp3.get(),inp4.get(),inp5.get(),winNew,root))
    bysure.place(relx=0.2, rely=0.6)
#窗口关闭按钮
    btClose = Button(winNew, text='关闭', command=winNew.destroy)
    btClose.place(relx=0.4, rely=0.6)

def update(root):
    winNew = Toplevel()
    winNew.geometry('300x500')
    winNew.title('修改信息')
    lb2 = Label(winNew, text='请输入你想修改的学生学号')
    lb2.place(relx=0, rely=0)

    xh = Label(winNew, text='学号:')
    xh.place(relx=0.05, rely=0.05)
    inp1 = Entry(winNew)
    inp1.place(relx=0.15, rely=0.05, relwidth=0.5, relheight=0.06)
    btClose = Button(winNew, text='确定', command=lambda :seek(inp1.get(),winNew,root))
    btClose.place(relx=0.66, rely=0.05)
    btClose = Button(winNew, text='取消', command=winNew.destroy)
    btClose.place(relx=0.8, rely=0.05)

def show(root,k):
    root.update()
    db = pymysql.connect(host="localhost", user="root", passwd="123", db="student", port=3306, charset="utf8")
    cursor = db.cursor()
    sql = "select * from students"
    cursor.execute(sql)
    result = cursor.fetchall()
    a = 0
    for row in result:
        sno = row[0]
        sname = row[1]
        sex = row[2]
        age = row[3]
        score = row[4]
        list_sno = Label(root, text=sno, width='20', bg='white', relief=GROOVE)
        list_sno.grid(column=0, row=a)
        list_sname = Label(root, text=sname, width='10', bg='white', relief=GROOVE)
        list_sname.grid(column=1, row=a)
        list_sex = Label(root, text=sex, width='5', bg='white', relief=GROOVE)
        list_sex.grid(column=2, row=a)
        list_age = Label(root, text=age, width='5', bg='white', relief=GROOVE)
        list_age.grid(column=3, row=a)
        list_score = Label(root, text=score, width='5', bg='white', relief=GROOVE)
        list_score.grid(column=4, row=a)
        a = a + 1
    db.close()
    if k==1:
        last1=Label(root, text=' ', width='20', bg='white', relief=GROOVE)
        last1.grid(column=0,row=a)
        last2 = Label(root, text=' ', width='10', bg='white', relief=GROOVE)
        last2.grid(column=1, row=a)
        last3 = Label(root, text=' ', width='5', bg='white', relief=GROOVE)
        last3.grid(column=2, row=a)
        last4 = Label(root, text=' ', width='5', bg='white', relief=GROOVE)
        last4.grid(column=3, row=a)
        last5 = Label(root, text=' ', width='5', bg='white', relief=GROOVE)
        last5.grid(column=4, row=a)


#主函数 构建窗体和菜单
k=0
root = Tk()
root.title('大学生信息管理系统')
root.geometry('400x500')
mainmenu = Menu(root)
mainmenu.add_cascade(label="显示所有信息",command=lambda :show(root,k))
mainmenu.add_cascade(label="添加信息",command=lambda :insert(root))
mainmenu.add_cascade(label="修改信息",command=lambda :update(root))
mainmenu.add_cascade(label="删除信息",command=lambda :delete(root))
root.config(menu=mainmenu)
root.mainloop()