#include <stdio.h>
int main()
{
  int typeO;
  printf("what kind of a steak are you looking for? (enter a number: ) \n");

  scanf("%d", &typeO);

  switch (typeO)
  {
  case 1:
    printf("Say u just dumb, pickin number 1 \n");
    break;
  case 55:
    printf("Now that's just random, like 55 ?!! \n");
    break;
  }
}