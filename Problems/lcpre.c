// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

char *longestCommonPrefix(char **strs, int strsSize)
{
  bool match;
  int n = strlen(strs[0]);
  int k = 0;
  char *ans = (char *)malloc((n + 1) * sizeof(char));

  for (int i = 0; i < n; i++)
  {
    char ch = strs[0][i];
    match = true;
    for (int j = 1; j < strsSize; j++)
    {
      if (strs[j][i] != ch || ch == '\0')
      {
        match = false;
        break;
      }
    }

    if (match == false)
      break;
    else
    {
      ans[i] = ch;
      k++;
    }
  }

  ans[k] = '\0'; // Terminate the ans string with null character
  return ans;
}

int main()
{
  char *sts[] = {"ab", "a"};
  char *commoner = longestCommonPrefix(sts, 2);

  printf("Common String: %s\n", commoner);
}