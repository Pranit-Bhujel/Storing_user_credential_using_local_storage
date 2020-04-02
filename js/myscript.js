	var store,text,obj;

	//fetching the previously stored values in the local storage,if no elements are present, then initializing with zero.
	let data = localStorage.getItem('mypeople') ? JSON.parse(localStorage.getItem('mypeople')):{
		"uname":[""],
		"psd":[""]
	};
	//Storing the data in local storage.
	function storedata(){
		//getting the individual elements.
		x=document.getElementById("name").value;
		y=document.getElementById("pass").value;

		//pushing the inputs to their respective arrays.
		data.uname.push(x);
		data.psd.push(y);

		store = JSON.stringify(data);
		localStorage.setItem("mypeople",store);

		if(x == "" || y == ""){
			console.log("no data")
		}
		else{
			alert("Successfully Registered");
		}

	}

    //Retrieving the data from local storage.
	function show_users(){
		//get the required data from the local storage
		text = localStorage.getItem("mypeople");
		obj = JSON.parse(text);

	//Tried creating tables for displaying username and password.	
	//get the parent body when we want to append the table for displaying users.
		var parent = document.getElementById('display_data');

		var userTable = document.createElement("table");
		
		var row = document.createElement("tr");
		var t = document.createElement("th");
		var n = document.createTextNode('Username');
		t.appendChild(n);
		var x = document.createElement("th");
		var p = document.createTextNode('Password');
		x.appendChild(p);
		
		userTable.appendChild(t)
		userTable.appendChild(x)

		userTable.setAttribute("id", "users");

		if(obj.uname.length == 0){
			alert('No users found.')
		}
		else{
    //creating rows for every user. 
		for(var i=0; i<2; i++){
			 
			for(var j=1; j < obj.uname.length && i==0; j++){
				var t_name = document.createElement("td");
				var name = document.createTextNode(obj.uname[j]);
				t_name.appendChild(name);
				var t_pass = document.createElement("td");
				var pass = document.createTextNode(obj.psd[j]);
				t_pass.appendChild(pass);
				
				var row = document.createElement("tr");

				row.appendChild(t_name);
				row.appendChild(t_pass);
				userTable.appendChild(row);
						}
				}
			}	
		parent.appendChild(userTable);
		// document.getElementById('parent').style.display = 'Block';
		document.getElementById('btn').disabled = true;

}

// Authenticating the user.
	function sign(){
		var i=0,count=0;
		x=document.getElementById("sname").value;
		y=document.getElementById("spass").value;
		if(x==""||y=="")
		{
			window.alert("Please fill in the data.");
		}
		else if(document.getElementById('user').checked){
			for(i in data.uname)
			{
				if(data.uname[i]==x && data.psd[i]==y){
					window.location.href ="users_.html";
					break;
				}
				else{
					count++;
				}
			}
		}
		else if(document.getElementById('admin').checked)
		{
			if(x=="root" && y=="admin"){
					window.location.href ="admin_.html";
				}
			else{
				window.alert("Incorrect Username or password.");
			}	
		}
		if(count==data.uname.length)
		{
			window.alert("Incorrect Username or password.");
		}
	}
