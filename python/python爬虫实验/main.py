import requests
from bs4 import BeautifulSoup
import bs4
import pandas as pd
import SQL


# 获取目标网址的文本信息
def gethtmltext(url):
    try:
        r = requests.get(url, timeout=40)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return ""

# 通过BeautifulSoup库解析网页，将需要的信息加入到一个列表中
def tolist(list, html):
    soup = BeautifulSoup(html, "html.parser")
    for tr in soup.find('tbody').children:
        if isinstance(tr, bs4.element.Tag):
            tds = tr('td')
            list.append([tds[0].text.strip(),tds[1].text.strip(),tds[2].text.strip(),tds[4].text.strip(),tds[5].text.strip()])

#格式化输出                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
def printlist(list):
    kkk="{0:^10}\t{1:{5}^10}\t{2:^10}\t{3:^10}\t{4:^10}"
    print(kkk.format("排名","学校名称","省市","得分","教学层次",chr(12288)))
    for i in list:
        print(kkk.format(i[0],i[1],i[2],i[3],i[4],chr(12288)))


#将信息保存为csv文件
def tocsv(name,list,num):
    list=list[0:num]
    test=pd.DataFrame(columns=name,data=list)
    test.to_csv('test.csv',index=False)

def main():
    #定义数组储存排名信息
    schoollist = []
    url = 'https://www.shanghairanking.cn/rankings/bcur/2020'
    html = gethtmltext(url)
    if html!="":
        tolist(schoollist,html)
        #将获取到的信息格式化输出
        printlist(schoollist)
        #将内容保存为csv文件
        name=['排名','学校名称','省市','总分','办学层次']
        tocsv(name,schoollist,50) #后面参数为写入条数
        #将数据写入到数据库
        SQL.insert(schoollist,50) #后面参数为写入条数
        print("成功")
    else:
        print("失败")

main()



#select * from school order by CONVERT(rank,SIGNED)