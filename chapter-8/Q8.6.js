function towerOfHanoi(size, A, B, C){

    if(size === 1) console.log(A, "to", C)
    else {
        towerOfHanoi(size - 1, A,C,B);
        towerOfHanoi(1, A,B,C);
        towerOfHanoi(size - 1, B, A, C);
    }
};

towerOfHanoi(4, "A","B","C")