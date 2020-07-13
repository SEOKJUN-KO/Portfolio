$(document).ready(function() {

  var params = {};//변수 설정
  window.location.search.replace( //url에서 넘어오는 값을 쉽게 파싱하기 위해 사용
    /[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
      params[key] = decodeURI(value); // 한글로 받은 값이 깨져 디코드 해줌
    }
  )
  var i=0;//변수 설정
  if(Object.keys(params).length > 0 ) {// 받아온 값의 길이가 0보다 크다면
    var k = params['p']; //변수에 값을 저장
    if(localStorage.getItem("D")==null&&k!=""){ // 로컬스토리지에 값이 없다면
      localStorage.setItem("D",k);// D변수에 값 저장
    };
    if(localStorage.getItem("D")!=null&&k!=""){// 로컬스토리지에 값이 있다면
      localStorage.setItem("D",localStorage.getItem("D")+","+k); // D변수에 그전에 값부터 현제 받은 값 저장
    };
  }
  let recentList = localStorage.getItem("D").toString().split(",") // 배열에 로컬스토리지에 담긴 값들을 저장
  recentList = recentList.filter((item, index) => recentList.indexOf(item) === index);// 배열에 중복된 값 삭제
  while(recentList[i]!=null){ // 배열 인덱스 값이 널이 아니라면 반복한다
    $(".make").append("<tr><th scope=\"row\">"+(i+2)+"</th><td>"+recentList[i]+" 알려주세요.</td></tr>"); // 인풋창에 입력된 음식을 테이블에 추가한다.
    i++;// 로컬스토리지를 사용하여 값을 가져오는 것임으로 인덱스를 늘려가면서 반복해준다.
  };
  $(".sum").append("전체글 ("+(i+1)+")");//전체글의 갯수를 알려주는 기능
});