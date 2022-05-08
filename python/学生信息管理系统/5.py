from tkinter import *
def show(root1):
    list_sno = Label(root, text='ddd', width='20', bg='white', relief=GROOVE)
    list_sno.grid(column=0, row=0)


root = Tk()
root.title('大学生信息管理系统')
root.geometry('400x500')
show(root)
root.mainloop()