Algoritmo BatallaNaval
	
	 // definición de variables y preparación de posiciones y tablero
	
	Definir i, j, disparo, colocinicial, intentos, cantidisparos, cantihundidos, buque1, buque2, subma1, subma2, subma3, cruce1, cruce2, cruce3, cruce4, porthundidos, buqhundidos, submahundidos, crucehundidos, lanchashundidas Como Entero
	Definir posicion, tablero Como Caracter
	Definir cumple, posiciones_completas Como Logico
	Dimension  posicion(100)
	Dimension  tablero(100)
	Dimension buque1(4), buque2(4)
	Dimension subma1(3), subma2(3), subma3(3)
	Dimension cruce1(2), cruce2(2), cruce3(2), cruce4(2)
	cantidisparos = 0
	cantip = 0
	
		 // Distribución de embarcaciones (1 portaaviones, 2 buques, 3 submarinos, 4 cruceros y 5 lanchas)
		
	Repetir  // Se repite todo el proceso, por si las colocaciones finales no tienen lugar disponible.
			
		Para i <- 01 hasta 100  // Se ponen las posiciones en cero ("a")
			posicion(i) <- "a"
			tablero(i) <- ConvertirATexto(i)
		FinPara
		posiciones_completas = Verdadero  // Condición de salida del ciclo general.
		
		 // 1 portaaviones
		
		Repetir
			colocinicial <- azar(100) + 1
			direccion <- azar(2)
			Si direccion = 0 Entonces
				posicion(colocinicial) <- "p"
				Para i = 1 hasta 4
					Si colocinicial + i = 11 o colocinicial + i = 21 o colocinicial + i = 31 o colocinicial + i = 41 o colocinicial + i = 51 o colocinicial + i = 61 o colocinicial + i = 71 o colocinicial + i = 81 o colocinicial + i = 91 o colocinicial + i = 101 Entonces
						cumple = Falso
						Para j = 1 hasta i
							posicion(colocinicial + j - 1) <- "a"
						FinPara
						i = 5
					SiNo
						posicion(colocinicial + i) <- "p"
						cumple = Verdadero
					FinSi
				FinPara
			SiNo
				posicion(colocinicial) <- "p"
				Para i = 10 hasta 40 Con Paso 10
					Si colocinicial + i > 100 Entonces
						cumple = Falso
						Para j = 10 hasta i Con Paso 10
							posicion(colocinicial + j - 10) <- "a"
						FinPara
						i = 50
					SiNo
						posicion(colocinicial + i) <- "p"
						cumple = Verdadero
					FinSi
				FinPara
			FinSi
		Hasta Que  cumple = Verdadero
	
	 //  2 buques
	
		Para j <- 1 hasta 2
			Repetir
				colocinicial <- azar(100) + 1
				direccion <- azar(2)
				cumple = Verdadero
				Si direccion = 0 Entonces
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 4) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" o posicion(colocinicial + 14) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 4) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" o posicion(colocinicial + 14) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 7 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" Entonces
								cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 o colocinicial = 61 o colocinicial = 71 o colocinicial = 81 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial - 6) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 4) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" o posicion(colocinicial + 14) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 91 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial - 6) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 4) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 92 o colocinicial = 93 o colocinicial = 94 o colocinicial = 95 o colocinicial = 96 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial - 6) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 4) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 97 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 17 o colocinicial = 27 o colocinicial = 37 o colocinicial = 47 o colocinicial = 57 o colocinicial = 67 o colocinicial = 77 o colocinicial = 87 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													numcontrol <- ConvertirATexto(colocinicial)
													Si colocinicial = 8 o colocinicial = 9 o colocinicial = 10 o SubCadena(numcontrol,2,2) = "8" o SubCadena(numcontrol,2,2) = "9" o SubCadena(numcontrol,2,2) = "0" Entonces
														cumple = Falso
													SiNo
														Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial - 6) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 4) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" o posicion(colocinicial + 14) <> "a" Entonces
															cumple = Falso
														FinSi
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "b"
						segun j hacer
							1: buque1(1) <- colocinicial
							2: buque2(1) <- colocinicial
						FinSegun
						Para i = 1 hasta 3
							posicion(colocinicial + i) <- "b"
							Segun j
								1: buque1(i + 1) <- colocinicial + i
								2: buque2(i + 1) <- colocinicial + i
							FinSegun
						FinPara
					FinSi
					
				SiNo  // Comienza todo el proceso anterior, para el caso de que la orientación del buque sea vertical.
					
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" o posicion(colocinicial + 40) <> "a" o posicion(colocinicial + 41) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" o posicion(colocinicial + 40) <> "a" o posicion(colocinicial + 41) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 61 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" Entonces
									cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 o colocinicial = 7 o colocinicial = 8 o colocinicial = 9 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" o posicion(colocinicial + 39) <> "a" o posicion(colocinicial + 40) <> "a" o posicion(colocinicial + 41) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 10 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 39) <> "a" o posicion(colocinicial + 40) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 20 o colocinicial = 30 o colocinicial = 40 o colocinicial = 50 o colocinicial = 60 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 39) <> "a" o posicion(colocinicial + 40) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 70 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 62 o colocinicial = 63 o colocinicial = 64 o colocinicial = 65 o colocinicial = 66 o colocinicial = 67 o colocinicial = 68 o colocinicial = 69 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													Si colocinicial + 30 > 100 Entonces
														cumple = Falso
													SiNo
														Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" o posicion(colocinicial + 39) <> "a" o posicion(colocinicial + 40) <> "a" o posicion(colocinicial + 41) <> "a" Entonces
															cumple = Falso
														FinSi
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "b"
						segun j hacer
							1: buque1(1) <- colocinicial
							2: buque2(1) <- colocinicial
						FinSegun
						
							
						Para i = 10 hasta 30 Con Paso 10
							posicion(colocinicial + i) <- "b"
							Segun j
								1: buque1((i/10) + 1) <- colocinicial + i
								2: buque2((i/10) + 1) <- colocinicial + i
							FinSegun
							
								
						FinPara
					FinSi
						
				FinSi
			Hasta Que  cumple = Verdadero
		FinPara
	
	 //  3 submarinos
	
		Para j <- 1 hasta 3
			Repetir
				colocinicial <- azar(100) + 1
				direccion <- azar(2)
				cumple = Verdadero
				Si direccion = 0 Entonces
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 o colocinicial = 7 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 8 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" Entonces
								cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 o colocinicial = 61 o colocinicial = 71 o colocinicial = 81 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 91 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 92 o colocinicial = 93 o colocinicial = 94 o colocinicial = 95 o colocinicial = 96 o colocinicial = 97 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 98 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 18 o colocinicial = 28 o colocinicial = 38 o colocinicial = 48 o colocinicial = 58 o colocinicial = 68 o colocinicial = 78 o colocinicial = 88 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													numcontrol <- ConvertirATexto(colocinicial)
													Si colocinicial = 9 o colocinicial = 10 o SubCadena(numcontrol,2,2) = "9" o SubCadena(numcontrol,2,2) = "0" Entonces
														cumple = Falso
													SiNo
														Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial - 7) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 3) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" o posicion(colocinicial + 13) <> "a" Entonces
															cumple = Falso
														FinSi
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "s"
						segun j hacer
							1: subma1(1) <- colocinicial
							2: subma2(1) <- colocinicial
							3: subma3(1) <- colocinicial
						FinSegun
						Para i = 1 hasta 2
							posicion(colocinicial + i) <- "s"
							Segun j
								1: subma1(i + 1) <- colocinicial + i
								2: subma2(i + 1) <- colocinicial + i
								3: subma3(i + 1) <- colocinicial + i
							FinSegun
						FinPara
					FinSi
					
				SiNo  // Comienza todo el proceso anterior, para el caso de que la orientación del buque sea vertical.
					
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 o colocinicial = 61 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 71 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" Entonces
									cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 o colocinicial = 7 o colocinicial = 8 o colocinicial = 9 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 10 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 20 o colocinicial = 30 o colocinicial = 40 o colocinicial = 50 o colocinicial = 60 o colocinicial = 70 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 80 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 72 o colocinicial = 73 o colocinicial = 74 o colocinicial = 75 o colocinicial = 76 o colocinicial = 77 o colocinicial = 78 o colocinicial = 79 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													Si colocinicial + 20 > 100 Entonces
														cumple = Falso
													SiNo
														Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" o posicion(colocinicial + 29) <> "a" o posicion(colocinicial + 30) <> "a" o posicion(colocinicial + 31) <> "a" Entonces
															cumple = Falso
														FinSi
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "s"
						segun j hacer
							1: subma1(1) <- colocinicial
							2: subma2(1) <- colocinicial
							3: subma3(1) <- colocinicial
						FinSegun
						Para i = 10 hasta 20 Con Paso 10
							posicion(colocinicial + i) <- "s"
							Segun j
								1: subma1((i/10) + 1) <- colocinicial + i
								2: subma2((i/10) + 1) <- colocinicial + i
								3: subma3((i/10) + 1) <- colocinicial + i
							FinSegun
						FinPara
					FinSi
						
				FinSi
			Hasta Que  cumple = Verdadero
		FinPara
		
		 //  4 cruceros
	
		intentos = 0
		Para j <- 1 hasta 4
			Repetir
				colocinicial <- azar(100) + 1
				direccion <- azar(2)
				cumple = Verdadero
				Si direccion = 0 Entonces
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 o colocinicial = 7 o colocinicial = 8 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 9 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
								cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 o colocinicial = 61 o colocinicial = 71 o colocinicial = 81 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 91 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 92 o colocinicial = 93 o colocinicial = 94 o colocinicial = 95 o colocinicial = 96 o colocinicial = 97 o colocinicial = 98 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 99 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 19 o colocinicial = 29 o colocinicial = 39 o colocinicial = 49 o colocinicial = 59 o colocinicial = 69 o colocinicial = 79 o colocinicial = 89 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													numcontrol <- ConvertirATexto(colocinicial)
													Si colocinicial = 10 o SubCadena(numcontrol,2,2) = "0" Entonces
														cumple = Falso
													SiNo
														Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 8) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 2) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 12) <> "a" Entonces
															cumple = Falso
														FinSi
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = falso Entonces
						intentos <- intentos + 1
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "c"
						posicion(colocinicial + 1) <- "c"
						segun j hacer
							1: cruce1(1) <- colocinicial
								cruce1(2) <- colocinicial + 1
							2: cruce2(1) <- colocinicial
								cruce2(2) <- colocinicial + 1
							3: cruce3(1) <- colocinicial
								cruce3(2) <- colocinicial + 1
							4: cruce4(1) <- colocinicial
								cruce4(2) <- colocinicial + 1
						FinSegun
					SiNo
						Si intentos = 40 Entonces  // Salta la chaveta si se repiten 30 intentos fallidos.
							j = 5
							cumple = Verdadero
						FinSi
					FinSi
					
				SiNo  // Comienza todo el proceso anterior, para el caso de que la orientación del buque sea vertical.
					
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 o colocinicial = 61 o colocinicial = 71 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 81 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
									cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 o colocinicial = 7 o colocinicial = 8 o colocinicial = 9 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 10 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 20 o colocinicial = 30 o colocinicial = 40 o colocinicial = 50 o colocinicial = 60 o colocinicial = 70 o colocinicial = 80 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 90 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 82 o colocinicial = 83 o colocinicial = 84 o colocinicial = 85 o colocinicial = 86 o colocinicial = 87 o colocinicial = 88 o colocinicial = 89 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													Si colocinicial + 10 > 100 Entonces
														cumple = Falso
													SiNo
														Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" o posicion(colocinicial + 19) <> "a" o posicion(colocinicial + 20) <> "a" o posicion(colocinicial + 21) <> "a" Entonces
															cumple = Falso
														FinSi
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = falso Entonces
						intentos <- intentos + 1
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "c"
						posicion(colocinicial + 10) <- "c"
						segun j hacer
							1: cruce1(1) <- colocinicial
								cruce1(2) <- colocinicial + 10
							2: cruce2(1) <- colocinicial
								cruce2(2) <- colocinicial + 10
							3: cruce3(1) <- colocinicial
								cruce3(2) <- colocinicial + 10
							4: cruce4(1) <- colocinicial
								cruce4(2) <- colocinicial + 10
						FinSegun
					SiNo
						Si intentos = 40 Entonces
							j = 5  // Salta la chaveta si se reiteran 30 intentos fallidos.
							cumple = Verdadero
						FinSi
					FinSi
			
				FinSi
			Hasta Que  cumple = Verdadero
		FinPara
		
		Si intentos < 40 Entonces
		
			 //  5 lanchas
			
			intentos = 0
			Para j <- 1 hasta 5
				Repetir
				colocinicial <- azar(100) + 1
				cumple = Verdadero
					Si colocinicial = 1 Entonces  // Comienza la evaluación de la disponibilidad de lugar, especialmente en los casos excepcionales.
						Si posicion(colocinicial) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
							cumple = Falso
						FinSi
					SiNo
						Si colocinicial = 2 o colocinicial = 3 o colocinicial = 4 o colocinicial = 5 o colocinicial = 6 o colocinicial = 7 o colocinicial = 8 o colocinicial = 9 Entonces
							Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
								cumple = Falso
							FinSi
						SiNo
							Si colocinicial = 10 Entonces
								Si posicion(colocinicial) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" Entonces
									cumple = Falso
								FinSi
							SiNo
								Si colocinicial = 11 o colocinicial = 21 o colocinicial = 31 o colocinicial = 41 o colocinicial = 51 o colocinicial = 61 o colocinicial = 71 o colocinicial = 81 Entonces
									Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
										cumple = Falso
									FinSi
								SiNo
									Si colocinicial = 91 Entonces
										Si posicion(colocinicial) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial + 1) <> "a" Entonces
											cumple = Falso
										FinSi
									SiNo
										Si colocinicial = 92 o colocinicial = 93 o colocinicial = 94 o colocinicial = 95 o colocinicial = 96 o colocinicial = 97 o colocinicial = 98 o colocinicial = 99 Entonces
											Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" Entonces
												cumple = Falso
											FinSi
										SiNo
											Si colocinicial = 100 Entonces
												Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial -1) <> "a" Entonces
													cumple = Falso
												FinSi
											SiNo
												Si colocinicial = 20 o colocinicial = 30 o colocinicial = 40 o colocinicial = 50 o colocinicial = 60 o colocinicial = 70 o colocinicial = 80 o colocinicial = 90 Entonces
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" Entonces
														cumple = Falso
													FinSi
												SiNo
													Si posicion(colocinicial) <> "a" o posicion(colocinicial - 11) <> "a" o posicion(colocinicial - 10) <> "a" o posicion(colocinicial - 9) <> "a" o posicion(colocinicial -1) <> "a" o posicion(colocinicial + 1) <> "a" o posicion(colocinicial + 9) <> "a" o posicion(colocinicial + 10) <> "a" o posicion(colocinicial + 11) <> "a" Entonces
														cumple = Falso
													FinSi
												FinSi
											FinSi
										FinSi
									FinSi
								FinSi
							FinSi
						FinSi
					FinSi
					Si cumple = falso Entonces
						intentos <- intentos + 1
					FinSi
					Si cumple = Verdadero Entonces
						posicion(colocinicial) <- "l"
					SiNo
						Si intentos = 40 Entonces  // Salta la chaveta si se reiteran 30 intentos fallidos.
							j = 6
							cumple = Verdadero
							posiciones_completas = Falso
						FinSi
					FinSi
				Hasta Que  cumple = Verdadero
			FinPara
		SiNo
			posiciones_completas = Falso
		FinSi
	
	Hasta Que posiciones_completas = Verdadero 
	intentos = 0
	
	 //  Presentación del tablero y Disparo
	
	Repetir
		
		Repetir
			Borrar Pantalla
			Escribir ""
			Escribir "Seleccione una posición para disparar:"
			Escribir ""
			Escribir " /  ", tablero(1), "  /   ", tablero(2), "  /   ", tablero(3) "  /   ", tablero(4), "  /  ", tablero(5), "  /   ", tablero(6) " /  ", tablero(7), " /  ", tablero(8), " / ", tablero(9) " / ", tablero(10), " / "
			Escribir " /  ", tablero(11), "  /  ", tablero(12), "  /  ", tablero(13) "  /  ", tablero(14), "  /  ", tablero(15), "  /  ", tablero(16) " / ", tablero(17), " / ", tablero(18), " / ", tablero(19) " / ", tablero(20), " / "
			Escribir " /  ", tablero(21), "  /  ", tablero(22), "  /  ", tablero(23) "  /  ", tablero(24), "  /  ", tablero(25), "  /  ", tablero(26) " / ", tablero(27), " / ", tablero(28), " / ", tablero(29) " / ", tablero(30), " / "
			Escribir " /  ", tablero(31), "  /  ", tablero(32), "  /  ", tablero(33) "  /  ", tablero(34), "  /  ", tablero(35), "  /  ", tablero(36) " / ", tablero(37), " / ", tablero(38), " / ", tablero(39) " / ", tablero(40), " / "
			Escribir " /  ", tablero(41), "  /  ", tablero(42), "  /  ", tablero(43) "  /  ", tablero(44), "  /  ", tablero(45), "  /  ", tablero(46) " / ", tablero(47), " / ", tablero(48), " / ", tablero(49) " / ", tablero(50), " / "
			Escribir " /  ", tablero(51), "  /  ", tablero(52), "  /  ", tablero(53) "  /  ", tablero(54), "  /  ", tablero(55), "  /  ", tablero(56) " / ", tablero(57), " / ", tablero(58), " / ", tablero(59) " / ", tablero(60), " / "
			Escribir " /  ", tablero(61), "  /  ", tablero(62), "  /  ", tablero(63) "  /  ", tablero(64), "  /  ", tablero(65), "  /  ", tablero(66) " / ", tablero(67), " / ", tablero(68), " / ", tablero(69) " / ", tablero(70), " / "
			Escribir " /  ", tablero(71), "  /  ", tablero(72), "  /  ", tablero(73) "  /  ", tablero(74), "  /  ", tablero(75), "  /  ", tablero(76) " / ", tablero(77), " / ", tablero(78), " / ", tablero(79) " / ", tablero(80), " / "
			Escribir " /  ", tablero(81), "  /  ", tablero(82), "  /  ", tablero(83) "  /  ", tablero(84), "  /  ", tablero(85), "  /  ", tablero(86) " / ", tablero(87), " / ", tablero(88), " / ", tablero(89) " / ", tablero(90), " / "
			Escribir " /  ", tablero(91), "  /  ", tablero(92), "  /  ", tablero(93) "  /  ", tablero(94), "  /  ", tablero(95), "  /  ", tablero(96) " / ", tablero(97), " / ", tablero(98), " / ", tablero(99) " / ", tablero(100), " / "
			Escribir ""
			Escribir "Portaaviones hundidos: ", porthundidos, "/1"
			Escribir "Buques hundidos: ", buqhundidos, "/2"
			Escribir "Submarinos hundidos: ", submahundidos, " /3"
			Escribir "Cruceros hundidos: ", crucehundidos, " /4"
			Escribir "Lanchas hundidas: ", lanchashundidas, " /5"
			Leer disparo
			Si disparo > 100 o disparo < 1 Entonces
					Escribir "Selección inválida. Presione una tecla para continuar."
					Esperar Tecla
			SiNo
					Si tablero(disparo) = " A" o tablero(disparo) = " X" o tablero(disparo) = " P" o tablero(disparo) = " B" o tablero(disparo) = " S" o tablero(disparo) = " C" o tablero(disparo) = " L" Entonces
						Escribir ""
						Escribir "Esa posición ya fue disparada. Toque una tecla para volver a disparar."
						Esperar Tecla
					FinSi
			FinSi
	
			Hasta Que disparo >= 1 y disparo <= 100 y tablero(disparo) <> " A" y tablero(disparo) <> " X" y tablero(disparo) <> " P" y tablero(disparo) <> " B" y tablero(disparo) <> " S" y tablero(disparo) <> " C" y tablero(disparo) <> " L"
			
			// Evaluación del disparo
			
			cantidisparos <- cantidisparos + 1
			
			Si posicion(disparo) = "a" Entonces
				Tablero(disparo) = " A"
				Escribir ""
				Escribir "¡AGUA!"
				Escribir ""
				Escribir "Presione una tecla para continuar."
				Esperar Tecla
			SiNo
				Si posicion(disparo) = "p" Entonces //Posible portaaviones
					cantip <- cantip + 1
					Si cantip < 5 Entonces
						Escribir ""
						Escribir "¡TOCADO!"
						Escribir ""
						Escribir "Presione una tecla para continuar."
						Esperar Tecla
						tablero(disparo) = " X"
					SiNo
						cantihundidos <- cantihundidos + 1
						porthundidos = 1
						Escribir ""
						Escribir "¡HUNDIDO!"
						Escribir ""
						Escribir "Presione una tecla para continuar."
						Esperar Tecla
						Para i <- 1 hasta 100
							Si posicion(i) = "p" Entonces
								tablero(i) = " P"
							FinSi
						FinPara
					FinSi
				SiNo
					Si posicion(disparo) = "b" Entonces //Encuentra buque
						tablero(disparo) = " X"
						Si tablero(buque1(1)) = " X" y tablero(buque1(2)) = " X" y tablero(buque1(3)) = " X" y tablero(buque1(4))= " X" Entonces
							cantihundidos <- cantihundidos + 1
							buqhundidos <- buqhundidos + 1
							Escribir ""
							Escribir "¡HUNDIDO!"
							Escribir ""
							Escribir "Presione una tecla para continuar."
							Esperar Tecla
							tablero(buque1(1)) = " B" 
							tablero(buque1(2)) = " B" 
							tablero(buque1(3)) = " B" 
							tablero(buque1(4))= " B"
						SiNo
							Si tablero(buque2(1)) = " X" y tablero(buque2(2)) = " X" y tablero(buque2(3)) = " X" y tablero(buque2(4))= " X" Entonces
								cantihundidos <- cantihundidos + 1
								buqhundidos <- buqhundidos + 1
								Escribir ""
								Escribir "¡HUNDIDO!"
								Escribir ""
								Escribir "Presione una tecla para continuar."
								Esperar Tecla
								tablero(buque2(1)) = " B" 
								tablero(buque2(2)) = " B" 
								tablero(buque2(3)) = " B" 
								tablero(buque2(4))= " B"
							SiNo
								Escribir ""
								Escribir "¡TOCADO!"
								Escribir ""
								Escribir "Presione una tecla para continuar."
								Esperar Tecla
								tablero(disparo) = " X"
							FinSi
						FinSi
					SiNo
						Si posicion(disparo) = "s" Entonces //Encuentra submarino
						tablero(disparo) = " X"
							Si tablero(subma1(1)) = " X" y tablero(subma1(2)) = " X" y tablero(subma1(3)) = " X" Entonces
								cantihundidos <- cantihundidos + 1
								submahundidos <- submahundidos + 1
								Escribir ""
								Escribir "¡HUNDIDO!"
								Escribir ""
								Escribir "Presione una tecla para continuar."
								Esperar Tecla
								tablero(subma1(1)) = " S" 
								tablero(subma1(2)) = " S" 
								tablero(subma1(3)) = " S"
							SiNo
								Si tablero(subma2(1)) = " X" y tablero(subma2(2)) = " X" y tablero(subma2(3)) = " X" Entonces
									cantihundidos <- cantihundidos + 1
									submahundidos <- submahundidos + 1
									Escribir ""
									Escribir "¡HUNDIDO!"
									Escribir ""
									Escribir "Presione una tecla para continuar."
									Esperar Tecla
									tablero(subma2(1)) = " S" 
									tablero(subma2(2)) = " S" 
									tablero(subma2(3)) = " S"
								SiNo
									Si tablero(subma3(1)) = " X" y tablero(subma3(2)) = " X" y tablero(subma3(3)) = " X" Entonces
										cantihundidos <- cantihundidos + 1
										submahundidos <- submahundidos + 1
										Escribir ""
										Escribir "¡HUNDIDO!"
										Escribir ""
										Escribir "Presione una tecla para continuar."
										Esperar Tecla
										tablero(subma3(1)) = " S" 
										tablero(subma3(2)) = " S" 
										tablero(subma3(3)) = " S"
									SiNo
										Escribir ""
										Escribir "¡TOCADO!"
										Escribir ""
										Escribir "Presione una tecla para continuar."
										Esperar Tecla
										tablero(disparo) = " X"
									FinSi
								FinSi
							FinSi
						SiNo
							Si posicion(disparo) = "c" Entonces //Encuentra crucero
								tablero(disparo) = " X"
								Si tablero(cruce1(1)) = " X" y tablero(cruce1(2)) = " X" Entonces
									cantihundidos <- cantihundidos + 1
									crucehundidos <- crucehundidos + 1
									Escribir ""
									Escribir "¡HUNDIDO!"
									Escribir ""
									Escribir "Presione una tecla para continuar."
									Esperar Tecla
									tablero(cruce1(1)) = " C" 
									tablero(cruce1(2)) = " C" 
								SiNo
									Si tablero(cruce2(1)) = " X" y tablero(cruce2(2)) = " X" Entonces
										cantihundidos <- cantihundidos + 1
										crucehundidos <- crucehundidos + 1
										Escribir ""
										Escribir "¡HUNDIDO!"
										Escribir ""
										Escribir "Presione una tecla para continuar."
										Esperar Tecla
										tablero(cruce2(1)) = " C" 
										tablero(cruce2(2)) = " C" 
									SiNo
										Si tablero(cruce3(1)) = " X" y tablero(cruce3(2)) = " X" Entonces
											cantihundidos <- cantihundidos + 1
											crucehundidos <- crucehundidos + 1
											Escribir ""
											Escribir "¡HUNDIDO!"
											Escribir ""
											Escribir "Presione una tecla para continuar."
											Esperar Tecla
											tablero(cruce3(1)) = " C" 
											tablero(cruce3(2)) = " C" 
										SiNo
											Si tablero(cruce4(1)) = " X" y tablero(cruce4(2)) = " X" Entonces
												cantihundidos <- cantihundidos + 1
												crucehundidos <- crucehundidos + 1
												Escribir ""
												Escribir "¡HUNDIDO!"
												Escribir ""
												Escribir "Presione una tecla para continuar."
												Esperar Tecla
												tablero(cruce4(1)) = " C" 
												tablero(cruce4(2)) = " C" 
											SiNo
												Escribir ""
												Escribir "¡TOCADO!"
												Escribir ""
												Escribir "Presione una tecla para continuar."
												Esperar Tecla
												tablero(disparo) = " X"
											FinSi
										FinSi
									FinSi
								FinSi
							SiNo
								cantihundidos <- cantihundidos + 1
								lanchashundidas <- lanchashundidas + 1
								Escribir ""					//Por descarte, encontró una lancha.
								Escribir "¡HUNDIDO!"
								Escribir ""
								Escribir "Presione una tecla para continuar."
								Esperar Tecla
								tablero(disparo) = " L"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi

	Hasta Que cantihundidos = 15  // Hasta triunfo
	
	Escribir ""
	Escribir "USTED HA LOGRADO DESTRUIR LA FLOTA ENEMIGA EN ", cantidisparos, " DISPAROS."
	
FinAlgoritmo
