// Convert a given roman numeral to an integer
//
#include<stdio.h>
#include<string.h>

int roman_to_integer(char c) {
    switch(c) {
        case 'I':  
            return 1;  
        case 'V':  
            return 5;  
        case 'X':  
            return 10;  
        case 'L':  
            return 50;  
        case 'C':  
            return 100;  
        case 'D':  
            return 500;  
        case 'M':  
            return 1000;  
        default:
            return 0;
    }
}

int romanToInt(char * s) {
    int i, int_num = roman_to_integer(s[0]);

    for (i = 1; s[i] != '\0'; i++) {
        int prev = roman_to_integer(s[i-1]);
        int curr = roman_to_integer(s[i]);

        if (prev < curr) {
            int_num = int_num - prev + (curr - prev);
        } else {
            int_num += curr;
        }
    }

    return int_num; 
}

int strP(char *s) {
    int i;
    for (i = 0; i < strlen(s); i++){

        printf("%c", s[i]);
    }
}

int main() {
    char * s = "XIII";
    int num = romanToInt(s);
    printf("%d \n", num);
}
