$(document).ready(function(){
    let recentList = localStorage.getItem("C").toString().split(",").reverse(); // 로컬스토리지에 값을 받아와서 역순으로 배열에 저장
    recentList = recentList.filter((item, index) => recentList.indexOf(item) === index); // 중복되는 값 삭제
    for(i=1;i<=5;i++){ // 5번 반복
        if(recentList[i-1]!=null){ // 배열의 인덱스 값이 널이 아니면
            var a = recentList[i-1]; // 값을 변수에 저장
            $(".l"+i).append(a);// 리스트 형태로 값을 페이지에 표현
        }
    }
});