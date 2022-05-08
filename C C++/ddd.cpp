#include <iostream>
#include <string.h>
using namespace std;
int main()
{
  string ox;
  cin >> ox;
  int num;
  cin >> num;
  int last[num];
  for (int i = 0; i < num; i++)
  {
    string temp;
    int istrue = 1;

    cin >> temp;
    int len = temp.length();
    for (int j = 0; j < len; j++)

    {
      if ((temp[j] == 1) && strcmp(ox[j], "X") == 0)
      {
        istrue = 0;
      }
    }
    last[i] = istrue;
  }
  for (int i = 0; i < num; i++)
  {
    cout << last[i];
  }
  return 0;
}