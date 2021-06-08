function list(names){
    var namesArray = names.map((element) => {
        return element.name;
    });
    if(namesArray.length > 1){
        var lastName = namesArray[namesArray.length - 1];
        namesArray.splice(namesArray.length - 1, 1);
        var namesString = namesArray.join(', ');
        return namesString + ' & ' + lastName;
    }
    else if(namesArray.length === 1)
        return namesArray[0];
    else
        return '';
}


console.log(list([{name: 'Bart'}]));
