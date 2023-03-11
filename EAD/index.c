#include <stdio.h>
#include <stdlib.h>


int main()
{
        // flaot 
        // double
        // long 
       // char
        int a = 0; // variavel a eh criada do tipo int e recebe 0
        int b = 0;
        int c = 0; // char c = '';
	int res = 0;
	printf("Entre com o primeiro numero!!\n");	
	scanf("%i",&a);

	printf("Entre com o segundo numero!!\n");	
	scanf("%i",&b);

	printf("1 - soma\n2 - subtrai\n");	
	scanf("%i",&c);

	//printf("1 - soma\n2 - subtrai\n");	
	//scanf("%c",&c);
	

	//if(c == 'c')
	if(c == 1)
	{
		res = a + b;
		printf("Resultado %i",res);	
	} 

	if( c == 2)
        {  

        }
        
	
	
}