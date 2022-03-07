# compornent（共通部品）

## 概要

- drawer menu(ハンバーガーメニュ) ※toggleClass(jQuery) 使用タイプ


## 仕様
- 「toggleClass」 jQueryを使用して実装。
- レスポンシブ対応済(width: 100%;、height: 100%;で設定してます。)
- ボタンの on/off の判断を jQuery で判断してます。
- toggleClass(jQuery)を使って、class を付けたり外したりして、css のメニューを open/close を実行します。

## 注意事項

- 「class="menu-list"」で position: fixed;を使用して要素を浮かせてるので、「class="menu-btn"」の height がなくなってます。見た目が気になったので height: 100vh;を設定してます。

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> menu-btn をコピペ。
- css: src -> module -> menu-list をコピペ。

## イメージ画像
<img width="392" alt="image" src="https://user-images.githubusercontent.com/99580997/157068886-5ac2ebdc-d7fc-44c9-9de0-4b6cf73b18cc.png">
<img width="392" alt="image" src="https://user-images.githubusercontent.com/99580997/157068978-95476ba8-7c4a-4ceb-85ab-40257b493c5a.png">
<img width="801" alt="image" src="https://user-images.githubusercontent.com/99580997/157069037-1bb53a54-4c16-4ac3-a5fe-5ecbb1d140a7.png">
<img width="801" alt="image" src="https://user-images.githubusercontent.com/99580997/157069082-c00a3c3f-660c-4037-916f-48c966530867.png">
<img width="952" alt="image" src="https://user-images.githubusercontent.com/99580997/157069152-27b11f63-2083-471b-997e-d52d100673be.png">
<img width="952" alt="image" src="https://user-images.githubusercontent.com/99580997/157069198-7ac9cfdb-d156-4d12-92b6-942c0b66cd12.png">


## portfolio url:

- https://css-md-0018.wtb.cfbx.jp/

## 参考にしたサイト

- JavaScript 不要！CSS だけでハンバーガーメニューを実装する方法
- https://www.asobou.co.jp/blog/web/css-menu
- chrome でチェックボックスが表示されない
- https://concrete5-japan.org/community/forums/chat/post-9722/

## 更新履歴

- 2022/3/8 初版作成完了（レスポンシブ対応済）

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
