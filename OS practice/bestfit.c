#include<stdio.h>
int main(){
    int numBlocks, numProcesses; 
    int blockSize[20], processSize[20]; 
    int allocatedSize[20]; 
    int blockfilled[20]; 
    printf("Enter the number of memory blocks: "); 
    scanf("%d", &numBlocks); 
    for(int i=0;i<numBlocks; i++){
        printf("Enter the size of each block %d": i=1); 
        scanf("%d", &blockSize[i]); 
        blockfilled[i]=-1; 
    }
    printf("Enter the number of processes:"); 
    scanf("%d", &numProcesses); 
    for(int i=0; i<numProcesses; i++){
        printf("Enter the size of each process %d": i+1); 
        scanf("%d", &processSize[i]); 
        allocatedSize[i]=-1; 
    }
    //BEST-fit allocation: 
    for(int p=0; p<numProcesses; p++){
        int bestIndex=-1; 
        for(int b=0; b<numBlocks; b++){
            if(blockfilled[b]==-1 && blockSize[b]>=processSize[p]){
                if(bestIndex==-1 || blocksize[b]<blockSize[bestIndex]){
                    bestIndex=b; 
                }
            }
        }
        if(bestIndex!=-1){
            allocatedBloc[p]=bestIndex; 
            blockFilled[bestIndex]=p;
        }
    }
}