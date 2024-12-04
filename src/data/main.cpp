// main.cpp
#include <emscripten/bind.h>
#include <string>

int getStringLength(const std::string& str) {
    return str.length();
}

EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("getStringLength", &getStringLength);
}


// em++ main.cpp -o main.js -s MODULARIZE -s EXPORT_NAME="createModule" --bind