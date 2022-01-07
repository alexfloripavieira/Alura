print("*************************************")
print("* Bem Vindo ao Jogo da Adivinhação! *")
print("*************************************")

numero_secreto = 20

chute = input("Digite o seu numero: ")



print("Você digitou: ", int(chute))

if (numero_secreto == int(chute)):
    print("Você acertou!")
else:
    print("Você errou!")
    print("O número secreto era ", numero_secreto)



