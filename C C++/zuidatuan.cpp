#include <fstream>
#include <iostream>
#include <stdlib.h>
#include <conio.h>
using namespace std;

#define MAX_v 50 //定义一个最大顶点个数
typedef struct{
    int a[MAX_v][MAX_v]; //无向图G的邻接矩阵
    int v; //无向图G的顶点
    int e; //无向图G的边
    int x[50]; //顶点与当前团的连接，x[i]=1 表示有连接——即x[i]==1代表在当前最大团的解内
    int bestx[50]; //当前最优解
    int cnum; //当前团的顶点数目
    int bestn; //最大团的顶点数目
}MCP;

void Creat(MCP &G);
void Backtrack(MCP &G,int i);

void Creat(MCP &G){
    int i,j;
    ifstream fin("data.txt");
    if (!fin)
    {
        cout<<"不能打开文件:"<<"data.txt"<<endl;
        exit(1);
    }
    fin>>G.v;
    for (int i=1;i<=G.v;i++)
        for (int j=1;j<=G.v;j++)
            fin>>G.a[i][j];
    for(i=1;i<=G.v;i++) //初始化
    {
        G.bestx[i]=0;
        G.x[i]=0;
        G.bestn=0;
        G.cnum=0;
    }
    cout<<"———回溯法求解最大团问题———"<<endl;
    cout<<"输入初始化无向图矩阵为:"<<endl; //初始化
    for(i=1;i<=G.v;i++)
    {
        for(j=1;j<=G.v;j++)
            cout<<G.a[i][j]<<" ";
        cout<<endl;
    }
}

void Backtrack(MCP &G,int i){
    if (i>G.v){        //output()阶段
        for (int j=1; j<=G.v; j++)
            G.bestx[j] = G.x[j];    //记录最优解
        G.bestn =G.cnum;
        return ;
    }
    //检查顶点i与当前团的连接
    int OK = 1;
    for (int j=1; j<=i ; j++)
        if (G.x[j]&& G.a[i][j]==0){        //G.x[j]:顶点j在当前解的最大团内；G.a[i][j]:待考察i顶点与最大团中前i-1个顶点间边的关系
            //i不与j相连
            OK = 0;
            break;
        }
        if (OK) {        //进入左子树
            G.x[i] = 1;//把i加入团
            G.cnum++;
            Backtrack(G,i+1);
            G.x[i]=0;
            G.cnum-- ;
        }
        if (G.cnum+G.v- i>G.bestn){        //进入右子树——剪枝函数
            G.x[i] = 0;
            Backtrack(G,i+1);
        }
}

int main(){
    MCP G;
    Creat(G);
    Backtrack(G,1);
    cout<<"最大团包含的顶点数为:"<<G.bestn<<endl;
    cout<<"最大团方案为:( ";
    for (int i=1;i<=G.v;i++)
        if(G.bestx[i]==1){
            cout<<i<<" ";
        }
        cout<<")"<<endl;
        getch();
}