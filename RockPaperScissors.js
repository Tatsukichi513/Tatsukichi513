'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// じゃんけんの配列をつくる
const list = ["rock", "scissors", "paper"];
// タグの取得
const OPPONENT_PICT = document.getElementsByTagName("img")[0];
const RESULT = document.querySelector(".result");
const winSound = new Audio('https://drive.google.com/uc?id=1RNOxkt9iPpyGxyfDQlWBx5TNJPbsCnXC');
const loseSound = new Audio('https://drive.google.com/uc?id=1bIjd6dVIJdWakZwM_0u1-3vpdYwMOfFj');
const aikoSound = new Audio('https://drive.google.com/uc?id=1Q4hjwZZ3CqBd6hLaaPpsqYzCiGgsXZd8');

// 変数宣言
let youHand;
// rock
function youHandRock() {
    // 変数にrockを格納
    youHand = list[0];
    RockPaperScissors(youHand);
}

// scissors
function youHandScissors() {
    // 変数にscissorsを格納
    youHand = list[1];
    RockPaperScissors(youHand);
}

// paper
function youHandPaper() {
    // 変数にpaperを格納
    youHand = list[2];
    RockPaperScissors(youHand);
}

// じゃんけん判定関数
function RockPaperScissors(youHand) {
    let opponentNumber = Math.floor(Math.random() * 3);
    let opponentHand;
    if (opponentNumber === 0) {
        opponentHand = "rock"
        OPPONENT_PICT.src = "https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s220/janken_gu.png"
    } else if (opponentNumber === 1) {
        opponentHand = "scissors"
        OPPONENT_PICT.src = "https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s270/janken_choki.png"
    } else if (opponentNumber === 2) {
        opponentHand = "paper"
        OPPONENT_PICT.src = "https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s290/janken_pa.png"
    }
    // you:rock
    if (youHand === "rock") {
        // you:rock opponent:rock
        if (opponentHand === "rock") {
            RESULT.textContent = "あいこです";
            aikoSound.play()
            // もう一度対決する？
            // you:rock opponent:scissors
        } else if (opponentHand === "scissors") {
            RESULT.textContent = "あなたの勝ちです";
            winSound.play()
            // you:rock opponent:paper
        } else if (opponentHand === "paper") {
            RESULT.textContent = "あなたの負けです"
            loseSound.play()
        }
    }
    // you:scissors
    if (youHand === "scissors") {
        // you:scissors opponent:rock
        if (opponentHand === "rock") {
            RESULT.textContent = "あなたの負けです"
            loseSound.play()
            // you:scissors opponent:scissors
        } else if (opponentHand === "scissors") {
            RESULT.textContent = "あいこです";
            aikoSound.play()
            // もう一度対決する？
            // you:scissors opponent:paper
        } else if (opponentHand === "paper") {
            RESULT.textContent = "あなたの勝ちです";
            winSound.play()
        }
    }
    // you:paper
    if (youHand === "paper") {
        // you:paper opponent:rock
        if (opponentHand === "rock") {
            RESULT.textContent = "あなたの勝ちです";
            winSound.play()
            // you:paper opponent:scissors
        } else if (opponentHand === "scissors") {
            RESULT.textContent = "あなたの負けです"
            loseSound.play()
            // you:paper opponent:paper
        } else if (opponentHand === "paper") {
            RESULT.textContent = "あいこです";
            aikoSound.play()
            // もう一度対決する？
        }
    }
}
// // 時間があれば
// // 勝った回数、負けた回数を保存
