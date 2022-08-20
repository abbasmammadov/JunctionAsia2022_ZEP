let startTime = new Date();

if (!App.storage) {
	App.storage = "{}";
}


App.onJoinPlayer.Add(function(p) {
    p.tag = {
        delta: 0,
		checked: false,
    }
});

App.onSay.Add(function(player, text) {
    let command = text.split(" ");
    if (command[0] == "?show") {
        App.sayToAll("Command 'show' received");
        App.sayToAll(App.storage);
        let stored = JSON.parse(App.storage);
		curr_player = player.name;
		info = stored[curr_player];
        App.showCenterLabel(curr_player+ ' - ' + info.attended + ' - ' + info.late + ' - ' + info.absent);
		//for([key, val] of Object.entries(stored)) {
		//	App.showCenterLabel(key);
		//}
    }
    else if (command[0] == "?attendance" && !(player.tag.checked)) { // && command[1] == player.name) {
		let timeDelta = (new Date()).getTime() - startTime.getTime();
		timeDelta = timeDelta / (1000*60);

		App.sayToAll("Attendance submitted after " + timeDelta + " minutes");
        // App.sayToAll("Command 'save' received");
        // App.showCenterLabel("Storing JSON");
		let checking_storage = JSON.parse(App.storage);
		//let temp = {"temp_array": []};
		let checker = true;
		/*
		for([key, val] of Object.entries(checking_storage)) {
			if (player.name == key) {
				App.showCenterLabel("Player already exists");
				checker = false;
			}
		}
		*/
		//if (checker) {
		let prev = App.storage;
		player.tag.delta = timeDelta;
		player.tag.checked = true;
		player.sendUpdated();

		for([key, val] of Object.entries(checking_storage)) {
			if (player.name == key) {
				checker = false;
			}
		}
		if (checker) {
			let previous = prev.substring(1, prev.length-1);
			let newData = `{${previous}"${player.name}": {"attended": "${0}", "late": "${0}", "absent": "${0}"},\n}`;
			App.storage = newData;
			//App.storage = `{"${player.name}": {"attended": "${0}", "late": "${0}", "absent": "${0}"}}`;
			App.save();
		}
		//}

		let updated_storage = JSON.parse(App.storage);
		curr_player = player.name;
		if (timeDelta < 5) {
			let foo = parseInt(updated_storage[curr_player].attended);
			updated_storage[curr_player].attended = foo + 1;
		}
		else if (timeDelta < 10) {
			let foo = parseInt(updated_storage[curr_player].late);
			updated_storage[curr_player].late = foo + 1;
		}
		else {
			let foo = parseInt(updated_storage[curr_player].absent);
			updated_storage[curr_player].absent = foo + 1;
		}
		
		if ((timeDelta > 10) && (player.tag.checked == false)) {
			let foo = parseInt(updated_storage[curr_player].absent);
			updated_storage[curr_player].absent = foo + 1;
		}
		
		App.storage = JSON.stringify(updated_storage);
		App.save();

		//App.onSay.Add(function(player, text) {
		//let commands = text.split(" ");
		//if (commands[0] == "?attendance" && commands[1] == player.name) {

		//});
	}
	else if (command[0] == "?attendance" && (player.tag.checked)) {
		App.showCenterLabel("You have already submitted your attendance");
	}
	else if (command[0] == 'abbas') {
		App.showCenterLabel("Checking");
	}
})
