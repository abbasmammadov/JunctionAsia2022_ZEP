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

	if ((command[0] == "?register") && (player.role > 0)) {
		let players_reg = App.players;
		let check_reg = JSON.parse(App.storage);
		let check_reg_str = App.storage;
		let checking = true;
		let temp_array = {"players": []};

		for (let i in players_reg) {
			player_check = players_reg[i];
			current_player = player_check.name;
			// let check_reg = JSON.parse(App.storage);
			// let check_reg_str = App.storage;
			// let checking = true;
			checking = true;
			for([key, val] of Object.entries(check_reg)) {
				if (current_player == key) {
					checking = false;
				}
			}

			if (checking) {
				temp_array.players.push(current_player);
			}
			// if (checking) {
			// 	let latest = check_reg_str.substring(1, check_reg.length-1);
			// 	let registered = `{${latest}"${current_player}": {"attended": "${0}", "late": "${0}", "absent": "${0}"},\n}`;
			// 	App.storage = registered;
			// 	App.save();
			// }
		}

		let registered = '';
		// addin players in temp_array to App.storage
		for (let i in temp_array.players) {
			registered += `"${temp_array.players[i]}": {"attended": "${0}", "late": "${0}", "absent": "${0}"},\n`;
		}
		let latest = check_reg_str.substring(1, check_reg_str.length-1);
		// App.sayToAll("###########");
		// App.sayToAll(latest);
		// App.sayToAll("###########");
		let new_storage = `{${registered}${latest}}`;
		// App.sayToAll(new_storage);
		App.storage = new_storage;
		App.save();


	}
    else if (command[0] == "?show") {
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
	else if (command[0] == "?stop" && (player.role > 0)){
		let stop_storage = JSON.parse(App.storage);
		//for([key, val] of Object.entries(stop_storage)) {
		//	if (player.name == key) {
		//		checker = false;
		//	}
		//}
		let players = App.players;
		for (let i in players) {
			player_check = players[i];
			curr_player = player_check.name;
			if ((player_check.tag.checked == false)) {
				let foo = parseInt(stop_storage[curr_player].absent);
				stop_storage[curr_player].absent = foo + 1;
			}	
		}
		App.storage = JSON.stringify(stop_storage);
		App.save();
	}

	else if (command[0] == "?reset" && (player.role > 0)){
		App.storage = "{}";
		App.save();
	}
	
	else if (command[0] == "?test") {
		App.showCenterLabel("Working")
	}
})
