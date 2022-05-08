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
    a=soup.find('span').text.strip()
    list=a
    # for tr in soup.find('span'):
    #     # if isinstance(tr, bs4.element.Tag):
    #         list=tr.text.strip()

schoollist = ""
url = 'https://static-eaa75795-8207-44df-9f80-5a3d38c21bdb.bspapp.com/'
html = gethtmltext(url)
print(html)
tolist(schoollist,html)
print(schoollist)