#include<iostream>
using namespace std;
#include"Status.h"
typedef int ElemType;
#include"LinkList.h"

int main()
{

	LinkList L;
	//	创建链表头 	
	InitList(L);
	
//	创建长度为4的链表 
	CreateList(L,4);
//	遍历链表 
	TraverseList(L);
	ElemType e;
	if(GetElem(L,3,e)== 1) 
		cout<<"查找完成"<<endl;
	else cout<<"查找失败"<<endl; 
	
}

