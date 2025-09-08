function vowelCheck(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let char of string) {
        if (vowels.includes(char)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
}
vowelCheck("yackiese");