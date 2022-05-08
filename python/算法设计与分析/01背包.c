#include<stdio.h>

#define M 6

#define N 10

void package(int (*m)[N + 1], int *w, int *v, int wLen, int nLen)

{

   int i,j;

   //阶段1

   for(j = 0; j <= nLen; j++)

   {

     if(j < *(w + 0))

     {

        *(*(m + 0) + j) = 0;

     }

     else

     {

        *(*(m + 0) + j) = *(v + 0);

     }

   }

   //阶段2...N

   for(i = 1; i < wLen; i++)

   {

     for(j = 0; j <= nLen; j++)

     {

        if(j < *(w + i))

        {

           *(*(m + i) + j) = *(*(m + i - 1) + j);

        }

        else

        {

           if(*(*(m + i - 1) + j) >= *(*(m + i - 1) + j - *(w + i)) + *(v + i))

           {

             *(*(m + i) + j) = *(*(m + i - 1) + j);

           }

           else

           {

             *(*(m + i) + j) = *(*(m + i - 1) + j - *(w + i)) + *(v + i);

           }

          }

      }

   }

}

int main()

{

   int w[M] = {2,2,6,5,4,3};

   int v[M] = {6,3,5,4,6,5};

   int m[M][N + 1] = {0};

   package(m, w, v, M, N);

   int  i;

   int left = N;

   for(i = M - 1; i > 0 ; i--)

   {

       if(left - w[i] >= 0 && m[i][left] == m[i - 1][left - w[i]] + v[i])

       {

           printf("object %d selected ", i + 1);

           left -= w[i];

       }     

   }

   if(m[0][left] != 0)

   {

       printf("object 1 selected ");

   }

   printf("the max value : %d ", m[M - 1][N - 1]);

   return 0;

}