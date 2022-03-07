# compornent（共通部品）

## 概要

- drawer menu(ハンバーガーメニュ) ※input 使用タイプ

- JavaScript を使用せず、CSS だけでハンバーガーメニューを実装してます。

## 仕様

-　<input type="checkbox" id="menu-btn-check">を使用して実装。

## 注意事項

- 「menu-btn\_\_check」と「menu-list」は同階層にセットしないと checkbox が反応しないので注意。
- 「class="menu-list"」で position: fixed;を使用して要素を浮かせてるので、「class="menu-btn"」の height がなくなってます。見た目が気になったので height: 100vh;を設定してます。

- reset.scss の以下の部分を修正しないと input の checkbox が表示されません。
- /_ フォームリセット _/
  input,
  button,
  select,
  textarea {
  // -webkit-appearance: none; -> コメントにする
  -moz-appearance: none;
  // appearance: none; -> コメントにする
  background: transparent;
  border: none;
  border-radius: 0;
  font: inherit;
  outline: none;
  }
- input[type="checkbox"],
  input[type="radio"] {
  // display: none; -> コメントにする
  display: block; -> none -> block に変更する
  }

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> menu-btn をコピペ。
- css: src -> module -> menu-list をコピペ。

## イメージ画像
<img width="440" alt="image" src="https://user-images.githubusercontent.com/99580997/157044189-46fdd759-f01e-4fcf-a31c-04eef4404a3d.png">
<img width="440" alt="image" src="https://user-images.githubusercontent.com/99580997/157044278-6e71a5cf-fe07-4947-addc-02b02e28a59e.png">
<img width="807" alt="image" src="https://user-images.githubusercontent.com/99580997/157044340-db62c1e7-02ac-45e3-8d46-db53b6112b35.png">
<img width="796" alt="image" src="https://user-images.githubusercontent.com/99580997/157044387-fe666212-b595-4499-88bd-903a31478324.png">
<img width="1305" alt="image" src="https://user-images.githubusercontent.com/99580997/157044439-19e3c470-bc10-40a8-aeb8-0c9954feaac9.png">
<img width="1305" alt="image" src="https://user-images.githubusercontent.com/99580997/157044467-809fceaa-d5f9-420f-9f7c-7badccdbb44c.png">


## portfolio url:

- https://css-md-0017.wtb.cfbx.jp/

## 参考にしたサイト

- JavaScript 不要！CSS だけでハンバーガーメニューを実装する方法
- https://www.asobou.co.jp/blog/web/css-menu
- chrome でチェックボックスが表示されない
- https://concrete5-japan.org/community/forums/chat/post-9722/

## 更新履歴

- 2022/3/7 初版 完成(sp、tb、pc、レスポンス対応済み)
- 2022/3/7 初版 作成中(三本線まで完成)

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
