SP= " "          #space
LS = 3*SP        #letter space
WS = 7*SP        #word space

alphabet={'a': '. -', 'b': '- . . .', 'c': '- . - .',
        'd': '- . .', 'e': '.', 'f': '. . - .', 'g': '- - .',
        'h': '. . . .', 'i': '. .', 'j': '. - - -', 'k': '- . -',
        'l': '. - . .', 'm': '- -', 'n': '- .', 'o': '- - -',
        'p': '. - - .', 'q': '- - . -', 'r': '. - .', 's': '. . .',
        't': '-', 'u': '. . -', 'v': '. . . -', 'w': '. - -',
        'x': '- . . -', 'y': '- . - -', 'z': '- - . .',
        '1': '. - - - -', '2': '. . - - -', '3': '. . . - -',
        '4': '. . . . -', '5': '. . . . .', '6': '- . . . .',
        '7': '- - . . .', '8': '- - - . .', '9': '- - - - .',
        '0': '- - - - -',
        }

def morse_converter():
    text = input("Type your message: ").lower()
    text_converted = ''

    for letter in text:
        if letter == " ":
            text_converted += WS
        else:
            text_converted += alphabet[letter] + LS
    print(text_converted)

    other_text = input("Do you want to convert again? Type y/n").lower()
    if other_text == "y":
        morse_converter()


morse_converter()
