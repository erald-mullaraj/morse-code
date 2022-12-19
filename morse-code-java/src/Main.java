import java.util.HashMap;
import java.util.Locale;
import java.util.Scanner;
import java.util.jar.JarEntry;

public class Main {
    public static void main(String[] args) {

        morse_converter();

    }

    public static void morse_converter() {
        HashMap<Character, String> alphabet = new HashMap<>();
        alphabet.put('a', ". -");
        alphabet.put('b', "- . . .");
        alphabet.put('c', "- . - .");
        alphabet.put('d', "- . .");
        alphabet.put('e', ".");
        alphabet.put('f', ". . - .");
        alphabet.put('g', "- - .");
        alphabet.put('h', ". . . .");
        alphabet.put('i', ". .");
        alphabet.put('j', ". - - -");
        alphabet.put('k', "- . -");
        alphabet.put('l', ". - . .");
        alphabet.put('m', "- -");
        alphabet.put('n', "- .");
        alphabet.put('o', "- - -");
        alphabet.put('p', ". - - .");
        alphabet.put('q', "- - . -");
        alphabet.put('r', ". - .");
        alphabet.put('s', ". . .");
        alphabet.put('t', "-");
        alphabet.put('u', ". . -");
        alphabet.put('v', ". . . -");
        alphabet.put('w', ". - -");
        alphabet.put('x', "- . . -");
        alphabet.put('y', "- . - -");
        alphabet.put('z', "- - . .");
        alphabet.put('1', ". - - - -");
        alphabet.put('2', ". . - - -");
        alphabet.put('3', ". . . - -");
        alphabet.put('4', ". . . . -");
        alphabet.put('5', ". . . . .");
        alphabet.put('6', "- . . . .");
        alphabet.put('7', "- - . . .");
        alphabet.put('8', "- - - . .");
        alphabet.put('9', "- - - - .");
        alphabet.put('0', "- - - - -");

        Scanner text = new Scanner(System.in);
        System.out.println("Type your message: ");
        String message = text.nextLine().toLowerCase();
        char textToConvert[] = new char[message.length()];
        message.getChars(0, message.length(), textToConvert, 0);
        String letterspace = "   ";
        String widespace = "       ";
        String convertedText = "";

        for (int i = 0; i < message.length(); i++) {
            String str = Character.toString(textToConvert[i]);
            if (str.equals(" ")) {
                convertedText = convertedText + widespace;
            } else
                convertedText = convertedText + alphabet.get(textToConvert[i]) + letterspace;
        }

        System.out.println(convertedText);

        System.out.println("Do you want to convert again? Type y/n: ");
        Scanner text2 = new Scanner(System.in);
        String message2 = text2.nextLine().toLowerCase();

        if (message2.equals("y")) {
            morse_converter();

        }
    }
}
