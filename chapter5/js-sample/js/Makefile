SHELL = /bin/bash

.PHONY: check clean

help:
	@echo "ドキュメント作成システム構築ガイド 第5章 サンプル"
	@echo
	@echo "使い方: make [ターゲット]"
	@echo
	@echo "ターゲット:"
	@echo " * check: 自動テストを開始します。"
	@echo " * distclean: 一切の生成物を削除します。削除する生成物にはダウンロードしたものを含みます。"
	@echo " * help: ヘルプを表示します。"

check: check-setup check-do check-teardown

check-setup: node_modules
	@echo ">>> redpen-serverを起動します"
	redpen-server
	@bash -c "for ((i=0;i<30;++i)); do nc -z 127.0.0.1 8080 && exit 0; sleep 1; done" || (echo ">>> redpen-serverが起動しないため、テスト実行を中断しました"; exit 2)
	@echo ">>> redpen-serverが起動しました"

check-teardown:

# TODO: overcome the 2000ms timeout
check-do: node_modules test
	@echo ">>> 自動テストを開始します"
	./node_modules/.bin/mocha
	@echo ">>> 自動テストが終了しました"

node_modules:
	@echo ">>> mochaをインストールしています"
	@(npm install mocha 2>/dev/null || (echo ">>> テスト実行にはnode.jsが必要です、実行を中断しました"; exit 2))
	@echo ">>> mochaをインストールしました"

distclean:
	rm -rf node_modules
