// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

#include <stdio.h>
#include <stdbool.h>

int getPalindrome(int y)
{
  // int y = x;
  int z = 0;

  while (y >= 10)
  {
    if (z != 0)
    {
      z *= 10;
      z += y % 10;
    }
    else
    {
      z = y % 10;
    }

    y /= 10;
  }

  z *= 10;
  z += y;

  printf("The result %d \n", z);
  return z;
}

bool isPalindrome(int x)
{
  return x == getPalindrome(x);
}

int main()
{
  int test = 534;
  int result = getPalindrome(test);

  printf("The original is: %d \n", test);
  printf("The result is: %d \n", result);
}