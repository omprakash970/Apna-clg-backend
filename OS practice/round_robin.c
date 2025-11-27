#include<stdio.h?
int main(){
    int process, timeQuantam; 
    int burstTime[20], remainingTime[20]; 
    int waitingTime[20], turnaroundTime[20]; 
    printf("Enter the number of processes:" ); 
    for(int i=0;i<numProcess; i++){
    printf("Enter the burst tiem of each process: %d), i+1);
    scanf("%d", &burstTime[i]);
    remainingTime[i]=burstTime[i];
    waitingTime[i]=0;
    
    }

    printf("Enter the time quantam: ); 
    scanf("%d", &timeQuantam ) ; 
    int currenTime=0; 
    int done=0; 
    do{
    done=0; 
    for(int i=0;i<numProcess; i++){
    if(remainingTime[i]>0)
done=0; 
if(remainingTime[i]>timeQuantam){
    currenttime+Quantamtime; 
    remaingTime[i-=timeQuntam]
}

    }
    }







  }