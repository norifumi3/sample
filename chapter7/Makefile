.PHONY: pdf epub html5 all clean

help:
	@echo "ドキュメント作成システム構築ガイド 第7章 サンプル"
	@echo
	@echo "使い方: make [ターゲット]"
	@echo
	@echo "ターゲット:"
	@echo " * all: 全文書（PDF・EPUB・HTML）を生成します。"
	@echo " * pdf: PDF文書を生成します。"
	@echo " * epub: EPUB文書を生成します。"
	@echo " * html: HTML文書を生成します。"
	@echo " * clean: 生成物を削除します。"
	@echo " * help: ヘルプを表示します。"

all: pdf epub html5

clean:
	rm -rf pdf epub html5

html: redpen-extension.adoc my.css
	@echo ">>> HTML文書を生成します"
	asciidoctor -D html -b html5 -a stylesheet=my.css $<
	@echo ">>> HTML文書が生成されました: html/redpen-extension.html"

pdf: redpen-extension.adoc
	@echo ">>> PDF文書を生成します"
	asciidoctor-pdf -D pdf -a pdf-style=my.yml $<
	@echo ">>> PDF文書が生成されました: pdf/redpen-extension.pdf"

epub: index.adoc
	@echo ">>> EPUB文書を生成します"
	asciidoctor-epub3 -D epub $<
	@echo ">>> EPUB文書が生成されました: epub/index.epub"
