"use strict";

var url = 'https://dev-dain.github.io/10-things-test';
var title = '[심리테스트] 나한테 어울리는 연예인 식단 테스트';
var hash = '%2310_연예인 식단 테스트 %233다이어트 %23다이어트 테스트';

function fb() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + title + '' + hash, 'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}

function tw() {
  var name = document.querySelector('.result').innerHTML;

  switch (name) {
    case '표범':
    case '유니콘':
      name += '이에요! ';
      break;

    default:
      name += '예요! ';
  }

  window.open('https://twitter.com/intent/tweet?text=' + title + '%0A' + '저는 ' + name + '' + hash + '%0A' + url, 'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}

function nv() {
  window.open('http://share.naver.com/web/shareView.nhn?url=' + url + '&title=' + title, 'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}

function band() {
  window.open('https://band.us/plugin/share?url=' + url + '&title=' + title, 'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}