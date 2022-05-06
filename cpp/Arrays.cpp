#include <iostream>
#include <vector>
using namespace std;

int main()
{
  // 2D arrays with pointers
  int **ptr;
  int arr1[4] = {1, 2, 3, 4};
  int arr2[4] = {5, 6, 7, 8};
  int arr3[4] = {9, 10, 11, 12};
  ptr = new int *[3];
  ptr[0] = new int[4];
  ptr[1] = new int[4];
  ptr[2] = new int[4];

  ptr[0] = arr1;
  ptr[1] = arr2;
  ptr[2] = arr3;
  cout << (ptr + 2) + 0;
}