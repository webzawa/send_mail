function myFunction() {
  const SEND_DATETIME = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
  const TO_ADDRESS = 'test@example.com';
  // const MAIL_SUBJECT = "【テスト送信】送信テスト" + SEND_DATETIME;
  const MAIL_SUBJECT = '【自動送信A】送信問い合わせテスト' + SEND_DATETIME.getHours() + SEND_DATETIME.getMinutes();
  const MAIL_BODY = '送信テスト';

  GmailApp.sendEmail(TO_ADDRESS, MAIL_SUBJECT, MAIL_BODY); // メール送信
}
