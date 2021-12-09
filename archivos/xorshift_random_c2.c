#include <stdio.h>

char CaracterAleatorio(char sem) //Si "sem" es distinto de cero, se introduce una nueva semilla; si no, se trabaja sobre la semilla anterior.
{
    static unsigned short semilla = 0xa0a0;

    if(sem)
        semilla = sem;

    semilla ^= semilla << 7;

    return semilla++ % 26 + 65 ;
}

int main(void)
{
    unsigned int contadores[26] = {0};
    unsigned short i;

    CaracterAleatorio(16);

    for(i = 0; i < 10000; i++)
        contadores[CaracterAleatorio(0) - 65]++;

    for(i = 0; i < 26; i++)
        printf("%c = %u\n", (char)i + 65, contadores[i]);
}
