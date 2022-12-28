/* Function to mark tiles with X or O */
flag = 1;
function mark_1() {
	if (flag == 1) {
		document.getElementById("tile1").value = "x";
		document.getElementById("tile1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile1").value = "o";
		document.getElementById("tile1").disabled = true;
		flag = 1;
	}
}

function mark_2() {
	if (flag == 1) {
		document.getElementById("tile2").value = "x";
		document.getElementById("tile2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile2").value = "o";
		document.getElementById("tile2").disabled = true;
		flag = 1;
	}
}

function mark_3() {
	if (flag == 1) {
		document.getElementById("tile3").value = "x";
		document.getElementById("tile3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile3").value = "o";
		document.getElementById("tile3").disabled = true;
		flag = 1;
	}
}

function mark_4() {
	if (flag == 1) {
		document.getElementById("tile4").value = "x";
		document.getElementById("tile4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile4").value = "o";
		document.getElementById("tile4").disabled = true;
		flag = 1;
	}
}

function mark_5() {
	if (flag == 1) {
		document.getElementById("tile5").value = "x";
		document.getElementById("tile5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile5").value = "o";
		document.getElementById("tile5").disabled = true;
		flag = 1;
	}
}

function mark_6() {
	if (flag == 1) {
		document.getElementById("tile6").value = "x";
		document.getElementById("tile6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile6").value = "o";
		document.getElementById("tile6").disabled = true;
		flag = 1;
	}
}

function mark_7() {
	if (flag == 1) {
		document.getElementById("tile7").value = "x";
		document.getElementById("tile7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile7").value = "o";
		document.getElementById("tile7").disabled = true;
		flag = 1;
	}
}

function mark_8() {
	if (flag == 1) {
		document.getElementById("tile8").value = "x";
		document.getElementById("tile8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile8").value = "o";
		document.getElementById("tile8").disabled = true;
		flag = 1;
	}
}

function mark_9() {
	if (flag == 1) {
		document.getElementById("tile9").value = "x";
		document.getElementById("tile9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("tile9").value = "o";
		document.getElementById("tile9").disabled = true;
		flag = 1;
	}
}

/* Reset button */
function reset() {
	document.getElementById("tile1").value = '';
	document.getElementById("tile1").disabled = false;
	document.getElementById("tile2").value = '';
	document.getElementById("tile2").disabled = false;
	document.getElementById("tile3").value = '';
	document.getElementById("tile3").disabled = false;
	document.getElementById("tile4").value = '';
	document.getElementById("tile4").disabled = false;
	document.getElementById("tile5").value = '';
	document.getElementById("tile5").disabled = false;
	document.getElementById("tile6").value = '';
	document.getElementById("tile6").disabled = false;
	document.getElementById("tile7").value = '';
	document.getElementById("tile7").disabled = false;
	document.getElementById("tile8").value = '';
	document.getElementById("tile8").disabled = false;
	document.getElementById("tile9").value = '';
	document.getElementById("tile9").disabled = false;
	flag = 1;
}

/* whatsNext */
/* win conditions
1, 2, 3
4, 5, 6
7, 8, 9

1, 4, 7
2, 5, 8
3, 6, 9

1, 5, 9
3, 5, 7 */
function whatsNext() {
	var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9; 
		tile1 = document.getElementById("tile1").value;
		tile2 = document.getElementById("tile2").value;
		tile3 = document.getElementById("tile3").value;
		tile4 = document.getElementById("tile4").value;
		tile5 = document.getElementById("tile5").value;
		tile6 = document.getElementById("tile6").value;
		tile7 = document.getElementById("tile7").value;
		tile8 = document.getElementById("tile8").value;
		tile9 = document.getElementById("tile9").value;

/* player X won */
if (
  (tile1 == "x" && tile2 == "x" && tile3 == "x") || 
  (tile4 == "x" && tile5 == "x" && tile6 == "x") ||
  (tile7 == "x" && tile8 == "x" && tile9 == "x") ||

  (tile1 == "x" && tile4 == "x" && tile7 == "x") || 
  (tile2 == "x" && tile5 == "x" && tile8 == "x") ||
  (tile3 == "x" && tile6 == "x" && tile9 == "x") ||

  (tile1 == "x" && tile5 == "x" && tile9 == "x") || 
  (tile3 == "x" && tile5 == "x" && tile7 == "x")
)
document.getElementById('print')
            .innerHTML = "Player X won";

else if (
	(tile1 == "o" && tile2 == "o" && tile3 == "o") || 
	(tile4 == "o" && tile5 == "o" && tile6 == "o") ||
	(tile7 == "o" && tile8 == "o" && tile9 == "o") ||
  
	(tile1 == "o" && tile4 == "o" && tile7 == "o") || 
	(tile2 == "o" && tile5 == "o" && tile8 == "o") ||
	(tile3 == "o" && tile6 == "o" && tile9 == "o") ||
  
	(tile1 == "o" && tile5 == "o" && tile9 == "o") || 
	(tile3 == "o" && tile5 == "o" && tile7 == "o")
  )
  document.getElementById('print')
			  .innerHTML = "Player O won";
		
			


}





