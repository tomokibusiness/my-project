document.addEventListener("DOMContentLoaded", function() {
    // ページの読み込みが完了したら実行される

    // 各プロンプト要素を取得
    const prompts = document.querySelectorAll(".prompt");
    prompts.forEach(prompt => {
        // 各プロンプトについて処理を行う

        // プロンプトの高さが表示される高さを超えるかをチェック
        if (prompt.scrollHeight > prompt.clientHeight) {
            // プロンプトが省略されている場合

            // 「...続きを見る」ボタンを作成
            const readMore = document.createElement("span");
            readMore.textContent = " ...続きを見る";
            readMore.className = "read-more";

            // ボタンがクリックされたときの処理を追加
            readMore.addEventListener("click", function() {
                // プロンプトの状態をトグル
                prompt.classList.toggle("collapsed");

                // プロンプトが閉じられたかどうかに応じてボタンのテキストを変更
                if (prompt.classList.contains("collapsed")) {
                    readMore.textContent = " 閉じる";
                } else {
                    readMore.textContent = " ...続きを見る";
                }
            });

            // 「...続きを見る」ボタンをプロンプトに追加
            prompt.appendChild(readMore);
        }
    });
});
