function addUser() {
    let player1_name = document.getElementById("player1_name_input").value;
    let player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    // Save to Firebase Realtime Database
    firebase.database().ref("/").child("players").set({
        player1: player1_name,
        player2: player2_name,
        player1_score: 0,
        player2_score: 0
    });

    window.location = "game_page.html";
}
