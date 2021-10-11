//テキストを含む一般的なモーダル
$(".info").modaal({
  overlay_close:true,//モーダル背景クリック時に閉じるか
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
});

//確認を促すモーダル
$(".confirm").modaal({
  type:'confirm',
  confirm_title: 'ログイン画面',//確認画面タイトル
  confirm_button_text: 'ログイン', //確認画面ボタンのテキスト
  confirm_cancel_button_text: 'キャンセル',//確認画面キャンセルボタンのテキスト
  confirm_content: 'ログインが必要です。<br>この画面はボタンを押さなければ閉じません。',//確認画面の内容
});
