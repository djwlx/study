typedef struct LNode
{
	ElemType data;
	struct LNode *next;
}LNode,*LinkList;


Status InitList(LinkList &L)
{
	L=new LNode;
	L->next=NULL;
	return OK;
}


void CreateList(LinkList &L,int n)
{
	LinkList r,p;
	r=L;
	for(int i=1;i<=n;i++)
		{
			p=new LNode;
			cout<<"������һ������";
			cin>>p->data;
			p->next=NULL;
			r->next=p;
			r=p;
		}
}


void TraverseList(LinkList L)
{
	if(!L->next)
		cout<<"�˱�Ϊ�ձ�"<<endl; 
	LinkList p=L->next;
	while(p)
	{
		cout<<p->data<<"   ";
		p=p->next;
	}
	cout<< endl;
	return;
}



Status GetElem(LinkList L,int i,ElemType &e)
{
//	ָ���׽ڵ� 
	LinkList p=L->next;
	int j=1;
	while(p)
	{
		if(j==i)
		cout<<p->data<<"    ";
		p=p->next;
		j++;
	}
	 
	return OK;
	 
}

