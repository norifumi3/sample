.PHONY: html all clean

help:
	@echo "ドキュメント作成システム構築ガイド 第6章 サンプル"
	@echo
	@echo "使い方: make [ターゲット]"
	@echo
	@echo "ターゲット:"
	@echo " * all: HTML文書を生成します。"
	@echo " * clean: 生成物を削除します。"
	@echo " * help: ヘルプを表示します。"

all: html

clean:
	rm -rf html

html: redpen-extension.adoc
	@echo ">>> HTML文書を生成します"
	asciidoctor -D html -b html5 $<
	@echo ">>> HTML文書が生成されました: html/redpen-extension.html"
