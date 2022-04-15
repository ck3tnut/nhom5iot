
// //----------------------
const firebaseConfig = {
    apiKey: "AIzaSyA1Sy0We2IORtkp3CrBcmYW9mB449NWO4w",
    authDomain: "test-9d32d.firebaseapp.com",
    databaseURL: "https://test-9d32d-default-rtdb.firebaseio.com",
    projectId: "test-9d32d",
    storageBucket: "test-9d32d.appspot.com",
    messagingSenderId: "699974056976",
    appId: "1:699974056976:web:03e69abb915b1e84dade95",
    measurementId: "G-EEJQQ5T7SC"
 };

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
var bomOn = document.getElementById("btnOnId_02");
var bomOff = document.getElementById("btnOffId_02");
var treeOn = document.getElementById("btnOnId_03");
var treeOff = document.getElementById("btnOffId_03");
var tableOn = document.getElementById("btnOnId_04");
var tableOff = document.getElementById("btnOffId_04");


//Lấy nhiệt độ
database.ref("TT_IoT/Temp").on("value", function(snapshot){
	var temp =snapshot.val();
	document.getElementById("nhietdo").innerHTML = temp;
});


//Lấy độ ẩm
database.ref("TT_IoT/Hum").on("value", function(snapshot){
	var hum =snapshot.val();
	document.getElementById("doam").innerHTML = hum;
});

//Lấy ánh sáng
database.ref("TT_IoT/Light").on("value", function(snapshot){
	var anhsang =snapshot.val();
	document.getElementById("anhsang").innerHTML = anhsang;
});

btnOn.onclick = function(){
	// document.getElementById("quatId_01").src ="./img/fanon.png"	
	database.ref("/TT_IoT").update({
		"Fan": "ON"
	});
}

btnOff.onclick = function(){
	// document.getElementById("quatId_01").src ="./img/fanoff.png"	
	database.ref("/TT_IoT").update({
		"Fan": "OFF"
	});
}

bomOn.onclick = function(){
	// document.getElementById("bomId_01").src ="./img/pumpon.png"	
	database.ref("/TT_IoT").update({ 
		"Pump": "ON"
	});
}
bomOff.onclick = function(){
	// document.getElementById("bomId_01").src ="./img/pumpoff.png"	
	database.ref("/TT_IoT").update({
		"Pump": "OFF"
	});
}

treeOn.onclick = function(){
	// document.getElementById("treeId_01").src ="./img/treeon.png"	
	database.ref("/TT_IoT").update({ 
		"TreeLed": "ON"
	});
}
treeOff.onclick = function(){
	// document.getElementById("treeId_01").src ="./img/treeoff.png"	
	database.ref("/TT_IoT").update({
		"TreeLed": "OFF"
	});
}
tableOn.onclick = function(){
	// document.getElementById("tableId_01").src ="./img/tableon.png"	
	database.ref("/TT_IoT").update({
		"TableLed": "ON"
	});
}
tableOff.onclick = function(){
	// document.getElementById("tableId_01").src ="./img/tableoff.png"	
	database.ref("/TT_IoT").update({
		"TableLed": "OFF"
	});
}


database.ref("TT_IoT/Fan").on("value", function(snapshot){
	var fan =snapshot.val();
	if (fan == "OFF")
		document.getElementById("quatId_01").src ="./img/fanoff.png";
	else
		document.getElementById("quatId_01").src ="./img/fanon.png";
});

database.ref("TT_IoT/Pump").on("value", function(snapshot){
	var pump =snapshot.val();
	if (pump == "OFF")
		document.getElementById("bomId_01").src ="./img/pumpoff.png";
	else
		document.getElementById("bomId_01").src ="./img/pumpon.png";
});

database.ref("TT_IoT/TableLed").on("value", function(snapshot){
	var tableLed =snapshot.val();
	if (tableLed == "OFF")
		document.getElementById("tableId_01").src ="./img/tableoff.png";
	else
		document.getElementById("tableId_01").src ="./img/tableon.png";
});
database.ref("TT_IoT/TreeLed").on("value", function(snapshot){
	var treeLed =snapshot.val();
	if (treeLed == "OFF")
		document.getElementById("treeId_01").src ="./img/treeoff.png";
	else
		document.getElementById("treeId_01").src ="./img/treeon.png";
});

