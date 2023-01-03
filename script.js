/* scoreboard */
const scoreBoard = document.getElementById("scoreboard");
   
  let plx_score = 0;
  let plo_score = 0;
  let tie_score = 0;


function x_win() {
	console.log("incrementing");
	plx_score++;
	player_x.innerHTML = plx_score;
	console.log(player_x);
}

function o_win() {
	console.log("incrementing");
	plo_score++;
	player_o.innerHTML = plo_score;
	console.log(player_o);
}

function tie_win() {
	console.log("incrementing");
	tie_score++;
	tie.innerHTML = tie_score;
	console.log(tie);
}

/* Who's turn is it */



/* Function to mark tiles with X or O */
flag = 1;

function mark_1() {
	if (flag == 1) {
		document.getElementById("tile1").value = "x";
		document.getElementById("tile1").disabled = true;
		flag = 0;
	} else {
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
	} else {
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
	} else {
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
	} else {
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
	} else {
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
	} else {
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
	} else {
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
	} else {
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
	} else {
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
	document.getElementById('print')
			.innerHTML = "";
}

/* whatsNext */
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

	/* win conditions */
	if (
		(tile1 == "x" && tile2 == "x" && tile3 == "x") ||
		(tile4 == "x" && tile5 == "x" && tile6 == "x") ||
		(tile7 == "x" && tile8 == "x" && tile9 == "x") ||

		(tile1 == "x" && tile4 == "x" && tile7 == "x") ||
		(tile2 == "x" && tile5 == "x" && tile8 == "x") ||
		(tile3 == "x" && tile6 == "x" && tile9 == "x") ||

		(tile1 == "x" && tile5 == "x" && tile9 == "x") ||
		(tile3 == "x" && tile5 == "x" && tile7 == "x")
	) {
		document.getElementById("tile1").disabled = true;
		document.getElementById("tile2").disabled = true;
		document.getElementById("tile3").disabled = true;
		document.getElementById("tile4").disabled = true;
		document.getElementById("tile5").disabled = true;
		document.getElementById("tile6").disabled = true;
		document.getElementById("tile7").disabled = true;
		document.getElementById("tile8").disabled = true;
		document.getElementById("tile9").disabled = true;

		document.getElementById('print')
			.innerHTML = "Player X won";
			x_win();
			


	} else if (
		(tile1 == "o" && tile2 == "o" && tile3 == "o") ||
		(tile4 == "o" && tile5 == "o" && tile6 == "o") ||
		(tile7 == "o" && tile8 == "o" && tile9 == "o") ||

		(tile1 == "o" && tile4 == "o" && tile7 == "o") ||
		(tile2 == "o" && tile5 == "o" && tile8 == "o") ||
		(tile3 == "o" && tile6 == "o" && tile9 == "o") ||

		(tile1 == "o" && tile5 == "o" && tile9 == "o") ||
		(tile3 == "o" && tile5 == "o" && tile7 == "o")
	)

	{
		document.getElementById("tile1").disabled = true;
		document.getElementById("tile2").disabled = true;
		document.getElementById("tile3").disabled = true;
		document.getElementById("tile4").disabled = true;
		document.getElementById("tile5").disabled = true;
		document.getElementById("tile6").disabled = true;
		document.getElementById("tile7").disabled = true;
		document.getElementById("tile8").disabled = true;
		document.getElementById("tile9").disabled = true;
		document.getElementById('print')
			.innerHTML = "Player O won";
			o_win();


	} else if ((tile1 == "o" || tile1 == "x") && (tile2 == "o" || tile2 == "x") && (tile3 == "o" || tile3 == "x") &&
		(tile4 == "o" || tile4 == "x") && (tile5 == "o" || tile5 == "x") && (tile6 == "o" || tile6 == "x") &&
		(tile7 == "o" || tile7 == "x") && (tile8 == "o" || tile8 == "x") && (tile9 == "o" || tile9 == "x"))

	{
		document.getElementById('print')
			.innerHTML = "Tie!";
			tie_win();

	}


}

