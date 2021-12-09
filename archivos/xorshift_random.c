#include <stdio.h>
#include <sys/time.h>

void Obtener_sec_centisec(char *sec, char *centis)
{
    struct timeval reloj;
    
    gettimeofday(&reloj, NULL);
    
    *sec = reloj.tv_sec % 60;
    *centis = reloj.tv_usec % 100;
}

void Inyectar_bits(short *inyectado, char inyectante)
{
    for(int i = 0; i < 8; i++)
    {
        *inyectado <<= 1;
        
        if(inyectante & 0x80)        
            (*inyectado)++;
        
        inyectante <<= 1;
    }
}

short Shifteo_rotativo(short num, short desplazamientos)
{
    for(int i = 0; i < desplazamientos; i++)
    {
        if(num & 0x8000)
            num = (num << 1) + 1;
        else
            num <<= 1;        
    }
    
    return num;
}

int main(void)
{    
    char segundos, centisegundos;
    
    unsigned short semilla = 0, auxiliar, unidades;
    
    unsigned int contadores[52] = {0};
    
    Obtener_sec_centisec(&segundos, &centisegundos);
    
    unidades = centisegundos % 10;
        
    Inyectar_bits(&semilla, segundos);
    Inyectar_bits(&semilla, centisegundos); //Con estas inyecciones obtengo el equivalente a la semilla del algoritmo original, donde "dh" toma los segundos del reloj, y "dl" los centisegundos.
    
    for(int i = 0; i < 10000; i++)
    {        
        semilla ^= Shifteo_rotativo(semilla, 8);
        
        semilla += unidades;
        
        unidades++;
        
        contadores[semilla % 52]++;
    }
    
    for(int i = 0; i < 13; i++)
        printf("Apariciones del %d: %hu\t\tApariciones del %d: %hu\t\tApariciones del %d: %hu\t\tApariciones del %d: %hu\n", i + 1, contadores[i], i + 14, contadores[i + 13], i + 27, contadores[i + 26], i + 40, contadores[i + 39]);

    return 0;
}
