#include <fstream>
#include <iostream>
#include <stdlib.h>
#include <conio.h>
using namespace std;

#define MAX_v 50 //����һ����󶥵����
typedef struct{
    int a[MAX_v][MAX_v]; //����ͼG���ڽӾ���
    int v; //����ͼG�Ķ���
    int e; //����ͼG�ı�
    int x[50]; //�����뵱ǰ�ŵ����ӣ�x[i]=1 ��ʾ�����ӡ�����x[i]==1�����ڵ�ǰ����ŵĽ���
    int bestx[50]; //��ǰ���Ž�
    int cnum; //��ǰ�ŵĶ�����Ŀ
    int bestn; //����ŵĶ�����Ŀ
}MCP;

void Creat(MCP &G);
void Backtrack(MCP &G,int i);

void Creat(MCP &G){
    int i,j;
    ifstream fin("data.txt");
    if (!fin)
    {
        cout<<"���ܴ��ļ�:"<<"data.txt"<<endl;
        exit(1);
    }
    fin>>G.v;
    for (int i=1;i<=G.v;i++)
        for (int j=1;j<=G.v;j++)
            fin>>G.a[i][j];
    for(i=1;i<=G.v;i++) //��ʼ��
    {
        G.bestx[i]=0;
        G.x[i]=0;
        G.bestn=0;
        G.cnum=0;
    }
    cout<<"���������ݷ������������⡪����"<<endl;
    cout<<"�����ʼ������ͼ����Ϊ:"<<endl; //��ʼ��
    for(i=1;i<=G.v;i++)
    {
        for(j=1;j<=G.v;j++)
            cout<<G.a[i][j]<<" ";
        cout<<endl;
    }
}

void Backtrack(MCP &G,int i){
    if (i>G.v){        //output()�׶�
        for (int j=1; j<=G.v; j++)
            G.bestx[j] = G.x[j];    //��¼���Ž�
        G.bestn =G.cnum;
        return ;
    }
    //��鶥��i�뵱ǰ�ŵ�����
    int OK = 1;
    for (int j=1; j<=i ; j++)
        if (G.x[j]&& G.a[i][j]==0){        //G.x[j]:����j�ڵ�ǰ���������ڣ�G.a[i][j]:������i�������������ǰi-1�������ߵĹ�ϵ
            //i����j����
            OK = 0;
            break;
        }
        if (OK) {        //����������
            G.x[i] = 1;//��i������
            G.cnum++;
            Backtrack(G,i+1);
            G.x[i]=0;
            G.cnum-- ;
        }
        if (G.cnum+G.v- i>G.bestn){        //����������������֦����
            G.x[i] = 0;
            Backtrack(G,i+1);
        }
}

int main(){
    MCP G;
    Creat(G);
    Backtrack(G,1);
    cout<<"����Ű����Ķ�����Ϊ:"<<G.bestn<<endl;
    cout<<"����ŷ���Ϊ:( ";
    for (int i=1;i<=G.v;i++)
        if(G.bestx[i]==1){
            cout<<i<<" ";
        }
        cout<<")"<<endl;
        getch();
}