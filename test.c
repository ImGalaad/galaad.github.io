#include <stdio.h>
#include <stdlib.h>


int main() {
    int* arr = malloc(4 * sizeof(int));
    arr[0] = 2;
    arr[1] = 3;
    arr[2] = 5;
    arr[3] = 7;

    printf("%d\n", arr[2]);
    free(arr);
}
