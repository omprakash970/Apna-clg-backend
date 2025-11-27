#include<stdio.h>
int main(){
    printf("Enter the no.of processes: "); 
    int n; 
    scanf("%d", &n);
    int bt[n], tat[n], wt[n]; 
    printf("Enter teh burst time of each process:\n");
    for(int i=0; i<n; i++){{
        process("Process %d", i+1)
        scanf("%d", &bt[i]); 
    };
    wt[o]=0; 
    for(int i =1;i<n; i++){
        wt[i]=wt[i-1]+bt[i-1];
    }
    for(int i=0; i<n; i++){
        tat[i]=wt[i]+bt[i]; 
    }
    //average values; 
    for(int i =0; i<n; i++){
        avgWt+=wt[i];
        avgTat+=tat[i];
    }
    float avgWt=0, avgTat=0;
    avgWt=avgWt/n;
    avgTat=avgTat/n;
    printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n"); 
    for(int i=0; i<n; i++){
        printf("P%d\t%d\t\t%d\t\t%d\n", i+1, bt[i], wt[i], tat[i]);
    }
    return 0; 
}