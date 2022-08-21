let testObject = App.loadSpritesheet("object.png", 1, 1);

let computerLocations ={ 
	0 : [3, 7],
	1 : [7, 7],
	2 : [11, 7],
	3 : [15, 7],
	4 : [3, 11],
	5 : [7, 11],
	6 : [11, 11],
	7 : [15, 11] 
};

let computerTotal = [];

App.onJoinPlayer.Add(function (player) {
	for (let x=0;x<8;x++)
	{
		for (let i=0;i<3;i++)
		{
			for (let j=0;j<3;j++)
			{
				let temp = {};
				temp.x = computerLocations[x][0]+i;
				temp.y = computerLocations[x][1]+j;
				computerTotal.push(temp);
				Map.putObject(computerLocations[x][0]+i, computerLocations[x][1]+j, testObject, { overlap: true });
			}
		}
	}
});

App.onJoinPlayer.Add(function (player) {
	player.tag = {
		widget: null,
	};
});

App.onObjectAttacked.Add(function (sender, x, y) {
	/* App.sayToAll(String(computerTotal));
	let temp = {};
	temp.x = x;
	temp.y = y;
	if (!computerTotal.includes(temp)){
		return;
	} */
	transcriptDB = {
		'Empty': "https://i.imgur.com/mQUVYzL.png",
		'Wasi': "https://i.imgur.com/FzppCNy.png",
		'Daeen Kabir': "https://i.imgur.com/6nqKydW.png",
		'sadatshams': "https://i.imgur.com/3ZLJDCE.png",
		'H M QUAMRAN HASAN': "https://i.imgur.com/Skonb0u.png",
		'Abbas Mammadov': "https://i.imgur.com/pJ97SsL.png"
	}
	//Map.putObject(x, y, null);	
	App.showCenterLabel(
		`${sender.name} has opened a transcript window`
		);
	let xx = sender.name;
	if (!transcriptDB.hasOwnProperty(xx)) {
		xx = 'Empty';
	}
	sender.tag.widget = sender.showWidget("videos.html","top",600,600);
	sender.tag.widget.sendMessage({
		text: transcriptDB[xx]
	});

	sender.tag.widget.onMessage.Add(function (sender, msg) {
		// Closes the widget when the 'type: close' message is sent from the widget to the App
		if (msg.type == "close") {
			App.showCenterLabel(`${sender.name} has closed transcript window`);
			sender.tag.widget.destroy();
			sender.tag.widget = null;
		}
	});
});
