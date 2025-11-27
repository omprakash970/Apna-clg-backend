#include<stdio.h>
#include<stdlib.h>
#include<ctype.h>
int main(){
    FILE*fp; 
    char ch; 
    int lines=0, words=0, characters=0; 
    int inword=0;
    fp=fopen("sample.txt", "r");
    if(fp==NULL){
        printf("Error opening file\n");
        return 1;   
    } 
    while((ch=fgets(fp))!=EOF){
        characters++; 
        if(ch=='\n'){
            lines++;
        }
        if(isspace(ch)){
            inword=0;   
        } else if(inword==0){
            inword=1;
            words++;
    }
    fclose(fp);
    printf("Lines: %d\n", lines);
    printf("Words: %d\n", words);
    printf("Characters: %d\n", characters);
    return 0;

}