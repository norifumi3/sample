.PHONY: pdf clean all

help:
	@echo "ドキュメント作成システム構築ガイド 第8章 サンプル"
	@echo
	@echo "使い方: make [ターゲット]"
	@echo
	@echo "ターゲット:"
	@echo " * all: PDF文書を生成します。"
	@echo " * clean: 生成物を削除します。"
	@echo " * help: ヘルプを表示します。"

all: pdf

pdf: redpen-extension.adoc fonts kindle.yml
	@echo ">>> PDF文書を生成します"
	asciidoctor-pdf -D pdf -a pdf-style=kindle.yml -a pdf-fontsdir=fonts ./redpen-extension.adoc
	@echo ">>> PDF文書が生成されました: ./pdf/redpen-extension.pdf"

clean:
	rm -rf pdf
