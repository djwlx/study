#include<iostream>
using namespace std;
#include"Status.h"
typedef int ElemType;
#include"LinkList.h"

int main()
{

	LinkList L;
	//	��������ͷ 	
	InitList(L);
	
//	��������Ϊ4������ 
	CreateList(L,4);
//	�������� 
	TraverseList(L);
	ElemType e;
	if(GetElem(L,3,e)== 1) 
		cout<<"�������"<<endl;
	else cout<<"����ʧ��"<<endl; 
	
}

