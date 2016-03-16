factory_root = asciidoctor-stylesheet-factory

sources = sass/asciidoctor.scss

.PHONY: all html oldhtml newhtml clean distclean

help:
	@echo "ドキュメント作成システム構築ガイド Appendix 1 サンプル"
	@echo
	@echo "使い方: make [ターゲット]"
	@echo
	@echo "ターゲット:"
	@echo " * all: HTML文書を生成します。文書生成は、スタイルシート適用あり・なしの2通りで行ないます。"
	@echo " * clean: 生成物を削除します。"
	@echo " * distclean: 一切の生成物を削除します。削除する生成物にはダウンロードしたものを含みます。"
	@echo " * help: ヘルプを表示します。"

all: html

clean:
	rm -rf stylesheets html

distclean: clean
	rm -rf $(factory_root)

html: oldhtml newhtml

oldhtml: gijiroku.adoc
	@echo ">>> HTML文書を生成しています"
	asciidoctor -D html/old -b html5 ./gijiroku.adoc
	@echo ">>> HTML文書が生成されました: html/old/gijiroku.html"

newhtml: gijiroku.adoc stylesheets/asciidoctor.css
	@echo ">>> HTML文書（スタイルシート適用済）を生成しています"
	asciidoctor -D html/new -b html5 -a stylesheet=stylesheets/asciidoctor.css ./gijiroku.adoc
	@echo ">>> HTML文書（スタイルシート適用済）が生成されました: html/new/gijiroku.html"

$(factory_root):
	@echo ">>> asciidoctor-stylesheet-factoryをクローンしています"
	git clone https://github.com/continuous-manual-writing/asciidoctor-stylesheet-factory.git asciidoctor-stylesheet-factory
	@echo ">>> asciidoctor-stylesheet-factoryをインストールしています"
	(cd $(factory_root) && gem install bundler && bundle install)
	@echo ">>> asciidoctor-stylesheet-factoryがインストールされました"

stylesheets/asciidoctor.css: $(factory_root) $(sources)
	@echo ">>> スタイルシートを生成しています"
	cp -r sass $(factory_root)
	(cd $(factory_root) && compass compile --css-dir ../stylesheets $(sources))
	@echo ">>> スタイルシートが生成されました: stylesheets"

# dependencies
stylesheets/asciidoctor.css: sass/settings/_asciidoctor.scss
