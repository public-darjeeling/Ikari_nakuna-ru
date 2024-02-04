// ページのロードが完了した際に実行されるコード
setInterval(() => {
    // ページ内のすべてのテキスト要素を取得
    var elements = document.querySelectorAll('p, span, li, a, button, td, th, strong, em, b, i, label, div:not(:has(*))');


    // 各テキスト要素に対して処理を行うループ
    elements.forEach(function (element) {
        // テキスト要素の内容を取得
        var text = element.textContent;
	if(text?.replace == undefined)
		return;
        var paragraphs = text.split('\n');

	var f = false;
        // 各文章に対して処理を行うループ
        paragraphs.forEach(function (paragraph, index) {
            // 最後の「。」だけを削除
            var modifiedParagraph = paragraph.replace(/([^。]+)。$/, '$1');

            // テキストを置き換える
            if (paragraph !== modifiedParagraph) {
                paragraphs[index] = modifiedParagraph;
		f = true;
		console.log(paragraph, modifiedParagraph);
            }
        });

        // 改行を含めて修正された文章を再度結合
        var modifiedText = paragraphs.join('\n');

        // テキストを置き換える
        if (text !== modifiedText && f) {
            element.textContent = modifiedText;
        }
    });
}, 1000)
