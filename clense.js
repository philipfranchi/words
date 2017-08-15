let main = (err,_data)=>{
	let data = _data;
	fs.readFile('./common.txt','utf8', (err, common)=>{
		let words = common.toUpperCase().split('\n');
        let oldGraph = JSON.parse(data);
        let newGraph = {};
        words.forEach((cur)=>{
            //console.log(oldGraph[cur]);
            newGraph[cur] = oldGraph[cur];
        })
        fs.writeFile("./graph10000.json", JSON.stringify(newGraph), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
	})
}


fs = require('fs');
fs.readFile('./graph.json', 'utf8', main);


