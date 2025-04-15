player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
guess_count = 0; // Added guess counter
max_guesses = 5;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

question_turn = "player1";
answer_turn = "player2";
let current_word = "";

function send() {
    let get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    current_word = word; // Store for checking
    console.log("word in lowerCase = " + word);

    let charAt1 = word.charAt(1);
    let length_divide_2 = Math.floor(word.length / 2);
    let charAt2 = word.charAt(length_divide_2);
    let length_minus_1 = word.length - 1;
    let charAt3 = word.charAt(length_minus_1);

    let remove_charAt1 = word.replace(charAt1, "_");
    let remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    let remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    let question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    let input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    let check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    let row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
    if (guess_count >= max_guesses) {
        document.getElementById("output").innerHTML = "<h4>Game Over! Maximum guesses reached.</h4>";
        return;
    }

    let get_answer = document.getElementById("input_check_box").value;
    let answer = get_answer.toLowerCase();
    guess_count++;

    let result_message = "";

    if (answer === current_word) {
        result_message += "<p><b>Correct!</b> The word was: " + current_word + "</p>";
        if (answer_turn === "player1") {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    } else {
        result_message += "<p><b>Wrong!</b> The correct word was: " + current_word + "</p>";
    }

    // Switch turns
    if (question_turn === "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn === "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    if (guess_count >= max_guesses) {
        result_message += "<br><h4>Game Over!</h4>";
    }

    document.getElementById("output").innerHTML = result_message;
}
