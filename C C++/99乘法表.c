#include<stdio.h>
int main(){

  // 控制行
  for(int i=1;i<=9;i++){
  // 控制每一列
    for(int j=1;j<=i;j++){
      printf("%dx%d=%d ",i,j,i*j);
    }
    printf("\n");\
  }
  return 0;
}