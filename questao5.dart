import 'dart:io';
// Função para inverter uma string
String inverterString(String str) {
  String invertedString = '';
  for (int i = str.length - 1; i >= 0; i--) {
    invertedString += str[i];
  }
  return invertedString;
}

  void main() {
  // String previamente definida no código (pode ser alterada conforme necessário)
  String stringOriginal = "Hello, world!";

  // Inverte a string
  String stringInvertida = inverterString(stringOriginal);

    print("Texto Original: $stringOriginal");
    print("Texto Invertido: $stringInvertida");

  // Solicitar ao usuário que insira o texto
  stdout.write("Digite o texto que deseja inverter: ");
  String textoOriginal = stdin.readLineSync()!;

  // Inverte a string
  String textoInvertido = inverterString(textoOriginal);

  print("Texto Original: $textoOriginal");
  print("Texto Invertido: $textoInvertido");
}

//Este código JavaScript inverte os caracteres de uma string sem usar funções prontas
//percorrendo a string de trás para frente e construindo uma nova string invertida.
//A string original pode ser definida previamente no código ou ser obtida através de qualquer outra entrada de preferência do usuário.
