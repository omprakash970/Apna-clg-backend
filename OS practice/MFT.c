#include<stdio.h>
int main(){
    int no.ofprocess, no.ofparitions; 
    int partitionSize[20], processSize[20]; 
    int allocatedProcess[20], allocatedParition[20];
    printf("Enter the number of pairtions"); 
    scanf("%d", &no.ofparitions);
    printf("Enter the size of each partition\n");
    for(int i=0;i<no.ofparitions;i++){
        scanf("%d", &partitionSize[i]);
        allocatedParition[i]=-1; 
    }
    printf("Enter the number of processes");
    scanf("%d", &no.ofprocess);
    printf("Enter the size of each process\n");
    for(int i=0;i<no.ofprocess;i++){
        scanf("%d", &processSize[i]);
        allocatedProcess[i]=-1; 
    }
    for(int i=0;i<processSize;i++){
        for(int j=0;j<no.ofparitions;j++){
            if(allocatedProcess[i]==-1&& paritionsSize[j]>=processSize[i]){
                allocatedProcess[j]=i; 
                allocatedParition[i]j; 
                break; 
            }
        }
    }
    for(int j=0;i<numberofParitions;j++){
        if(allocatedPairtion[j]!=-1){
            int p=allocatedParition[j];
            
        }
    }
}