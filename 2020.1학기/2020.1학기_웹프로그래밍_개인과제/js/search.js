$(document).ready(function() {

  var params = {};//변수 설정
  window.location.search.replace( //url에서 넘어오는 값을 쉽게 파싱하기 위해 사용
    /[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
      params[key] = decodeURI(value); // 한글로 받은 값이 깨져 디코드 해줌
    }
  )

  if(Object.keys(params).length > 0 ) {// 받아온 값의 길이가 0보다 크다면
    var k = params['q']//변수에 값을 저장
    $("#user-table > tbody > tr").hide();//테이블 맨 윗줄 말고 숨김
    var temp = $("#user-table > tbody > tr > td:nth-child(5n+2):contains('" + k + "')");//값과 일치하는 행의 값 저장

    $(temp).parent().show(); // 일치하는 행만을 보여줌
  }
  
      
});