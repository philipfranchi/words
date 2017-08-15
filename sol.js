let prune = function(data){
    let pruned = false;

    let words = Object.keys(data);
    let usedWords = {};
    let def = [];
    /*Build database of words used*/
    for(let i = 0; i < words.length; i++){

        def[i] = data[words[i]];

        def[i].forEach(function(cur){
            usedWords[cur] = true;
        });
    }

    for(let i = 0; i < words.length; i++){
        if(usedWords[words[i]]) continue;
        delete data[words[i]]; 
    }
}

let main = function (err,_data) {

    let data = JSON.parse(_data);

    let oldCount = Object.keys(data).length;
    let newCount = 0;

    console.log(oldCount);
    while(newCount != oldCount){
        oldCount = newCount;
        prune(data);
        newCount = Object.keys(data).length;
    }
    console.log(newCount);

    fs.writeFile("./res.json", Object.keys(data).sort().toString().replace(/,/g,'\n'), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}




fs = require('fs');
fs.readFile('./graph10000.json', 'utf8', main);
