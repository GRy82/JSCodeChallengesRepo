function encrypt(text, n) {
    if (text === null || text === '' || n <= 0) return text;

    let counter = 0;
    while(counter < n){
        let string1 = '', string2 = '';

        for(let i = 0; i < text.length; i++){
            if (i % 2 === 0)
                string2 += text[i];
            else
                string1 += text[i]
        }

        text = string1 + string2;
        counter++;
    }

    return text;
}

function decrypt(encryptedText, n) {
    if (encryptedText === null || encryptedText === '' || n <= 0) return encryptedText;

    let counter = 0;
    while(counter < n){
        let conjoinedString = '';
        let halfwayPoint = encryptedText.length / 2;
        let string1 = encryptedText.slice(0, halfwayPoint);
        let string2 = encryptedText.slice(halfwayPoint, encryptedText.length);

        for(let i = 0, j = 0; i < string1.length + string2.length; i++){
            if (i % 2 === 1)
                conjoinedString += string1[j++];
            else 
                conjoinedString += string2[j];
        }

        encryptedText = conjoinedString;
        counter++;
    }

    return encryptedText;
}

console.log(decrypt("hsi  etTi sats!", 1));