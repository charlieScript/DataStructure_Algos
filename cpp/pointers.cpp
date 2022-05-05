#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int *ptr;
  // vector<int> arr;
  // int var = 5;
  // arr.push_back(3);
  // arr.push_back(7);
  //     ptr = &var;
  // int *vectorValue = arr.data();

  int arr[3] = { 1, 3, 4};
  ptr = arr;
  cout << *(ptr + 1)  << endl;
  int a;
  cin >> a;
  cout << a;
  return 0;
}