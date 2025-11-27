#include<stdio.h>
int main(){
    int n; 
    printf("Enter the no.of processes: "); 
    scanf("%d", &n); 
    int bt[n], wt[n], tat[n]; 
    printf("Enter the burst times of each process:\n");
    for(int i=0;i<n; i++){
        printf("Process %d", i+1); 
        scanf("%d", &bt[i]); 
    }
    wt[0]=0;
    for(int i=1;i<n;i++){
        wt[i]=wt[i-1] + bt[i-1];[ ]
    }
}