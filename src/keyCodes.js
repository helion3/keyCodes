;(function() {
    'use strict';

    // Safe AMD module in node/web
    var _define = (typeof define !== 'function' ? require('amdefine')(module) : define);
    _define(function(require) {
        // Re-usable method for writing constants
        var setConstant = function(obj, name, value) {
            Object.defineProperty(obj, name, {
                value: value,
                enumerable: false,
                configurable: false,
                writable: false
            });
        };

        var KeyCodes = {};

        setConstant(KeyCodes, 'BACKSPACE', 8);
        setConstant(KeyCodes, 'TAB', 9);
        setConstant(KeyCodes, 'NUM_CENTER', 12);
        setConstant(KeyCodes, 'ENTER', 13);
        setConstant(KeyCodes, 'RETURN', 13);
        setConstant(KeyCodes, 'SHIFT', 16);
        setConstant(KeyCodes, 'CTRL', 17);
        setConstant(KeyCodes, 'ALT', 18);
        setConstant(KeyCodes, 'PAUSE', 19);
        setConstant(KeyCodes, 'CAPS_LOCK', 20);
        setConstant(KeyCodes, 'ESC', 27);
        setConstant(KeyCodes, 'SPACE', 32);
        setConstant(KeyCodes, 'PAGE_UP', 33);
        setConstant(KeyCodes, 'PAGE_DOWN', 34);
        setConstant(KeyCodes, 'END', 35);
        setConstant(KeyCodes, 'HOME', 36);
        setConstant(KeyCodes, 'LEFT', 37);
        setConstant(KeyCodes, 'UP', 38);
        setConstant(KeyCodes, 'RIGHT', 39);
        setConstant(KeyCodes, 'DOWN', 40);
        setConstant(KeyCodes, 'PRINT_SCREEN', 44);
        setConstant(KeyCodes, 'INSERT', 45);
        setConstant(KeyCodes, 'DELETE', 46);
        setConstant(KeyCodes, 'ZERO', 48);
        setConstant(KeyCodes, 'ONE', 49);
        setConstant(KeyCodes, 'TWO', 50);
        setConstant(KeyCodes, 'THREE', 51);
        setConstant(KeyCodes, 'FOUR', 52);
        setConstant(KeyCodes, 'FIVE', 53);
        setConstant(KeyCodes, 'SIX', 54);
        setConstant(KeyCodes, 'SEVEN', 55);
        setConstant(KeyCodes, 'EIGHT', 56);
        setConstant(KeyCodes, 'NINE', 57);
        setConstant(KeyCodes, 'A', 65);
        setConstant(KeyCodes, 'B', 66);
        setConstant(KeyCodes, 'C', 67);
        setConstant(KeyCodes, 'D', 68);
        setConstant(KeyCodes, 'E', 69);
        setConstant(KeyCodes, 'F', 70);
        setConstant(KeyCodes, 'G', 71);
        setConstant(KeyCodes, 'H', 72);
        setConstant(KeyCodes, 'I', 73);
        setConstant(KeyCodes, 'J', 74);
        setConstant(KeyCodes, 'K', 75);
        setConstant(KeyCodes, 'L', 76);
        setConstant(KeyCodes, 'M', 77);
        setConstant(KeyCodes, 'N', 78);
        setConstant(KeyCodes, 'O', 79);
        setConstant(KeyCodes, 'P', 80);
        setConstant(KeyCodes, 'Q', 81);
        setConstant(KeyCodes, 'R', 82);
        setConstant(KeyCodes, 'S', 83);
        setConstant(KeyCodes, 'T', 84);
        setConstant(KeyCodes, 'U', 85);
        setConstant(KeyCodes, 'V', 86);
        setConstant(KeyCodes, 'W', 87);
        setConstant(KeyCodes, 'X', 88);
        setConstant(KeyCodes, 'Y', 89);
        setConstant(KeyCodes, 'Z', 90);
        setConstant(KeyCodes, 'CONTEXT_MENU', 93);
        setConstant(KeyCodes, 'NUM_ZERO', 96);
        setConstant(KeyCodes, 'NUM_ONE', 97);
        setConstant(KeyCodes, 'NUM_TWO', 98);
        setConstant(KeyCodes, 'NUM_THREE', 99);
        setConstant(KeyCodes, 'NUM_FOUR', 100);
        setConstant(KeyCodes, 'NUM_FIVE', 101);
        setConstant(KeyCodes, 'NUM_SIX', 102);
        setConstant(KeyCodes, 'NUM_SEVEN', 103);
        setConstant(KeyCodes, 'NUM_EIGHT', 104);
        setConstant(KeyCodes, 'NUM_NINE', 105);
        setConstant(KeyCodes, 'NUM_MULTIPLY', 106);
        setConstant(KeyCodes, 'NUM_PLUS', 107);
        setConstant(KeyCodes, 'NUM_MINUS', 109);
        setConstant(KeyCodes, 'NUM_PERIOD', 110);
        setConstant(KeyCodes, 'NUM_DIVISION', 111);
        setConstant(KeyCodes, 'F1', 112);
        setConstant(KeyCodes, 'F2', 113);
        setConstant(KeyCodes, 'F3', 114);
        setConstant(KeyCodes, 'F4', 115);
        setConstant(KeyCodes, 'F5', 116);
        setConstant(KeyCodes, 'F6', 117);
        setConstant(KeyCodes, 'F7', 118);
        setConstant(KeyCodes, 'F8', 119);
        setConstant(KeyCodes, 'F9', 120);
        setConstant(KeyCodes, 'F10', 121);
        setConstant(KeyCodes, 'F11', 122);
        setConstant(KeyCodes, 'F12', 123);

        return KeyCodes;

    });
})();
