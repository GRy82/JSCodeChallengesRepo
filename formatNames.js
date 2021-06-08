function list(names){
    var namesArray = names.map((element) => {
        return element.name;
    });
    if(namesArray.length > 1){
        var namesResult = namesArray.slice(0, namesArray.length - 1).join(', ');
        return namesResult  + ' & ' + namesArray[namesArray.length - 1];
    }
    else if(namesArray.length === 1)
        return namesArray[0];
    else
        return '';
}


console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));


//clever solution seen that uses pop() and a ternary as well.

// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
//   }