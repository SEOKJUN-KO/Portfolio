
  function button_A(){
    if(localStorage.getItem("C")==null){//로컬스토리지에 값이 없을 때
      localStorage.setItem("C","소갈비찜");//값을 C에 저장
    } 
    else{//로컬스토리지에 값이 있을 때
      localStorage.setItem("C",localStorage.getItem("C")+","+"소갈비찜");//전의 값과 현재의 값을 더함
    }
  };
  function button_B(){
    if(localStorage.getItem("C")==null){//로컬스토리지에 값이 없을 때
      localStorage.setItem("C","카라멜 식빵");//값을 C에 저장
    } 
    else{//로컬스토리지에 값이 있을 때
      localStorage.setItem("C",localStorage.getItem("C")+","+"카라멜 식빵");//전의 값과 현재의 값을 더함
    }
  };   
  function button_C(){
    if(localStorage.getItem("C")==null){//로컬스토리지에 값이 없을 때
      localStorage.setItem("C","멘보샤");//값을 C에 저장
    } 
    else{//로컬스토리지에 값이 있을 때
      localStorage.setItem("C",localStorage.getItem("C")+","+"멘보샤");//전의 값과 현재의 값을 더함
    }
  };  
  function button_D(){
    if(localStorage.getItem("C")==null){//로컬스토리지에 값이 없을 때
      localStorage.setItem("C","(완)감바스");//값을 C에 저장
    } 
    else{//로컬스토리지에 값이 있을 때
      localStorage.setItem("C",localStorage.getItem("C")+","+"(완)감바스");//전의 값과 현재의 값을 더함
    }
  };  
  function button_E(){
    if(localStorage.getItem("C")==null){//로컬스토리지에 값이 없을 때
      localStorage.setItem("C","(완)초밥");//값을 C에 저장
    } 
    else{//로컬스토리지에 값이 있을 때
      localStorage.setItem("C",localStorage.getItem("C")+","+"(완)초밥");//전의 값과 현재의 값을 더함
    }
  };  
  function button_F(){
    if(localStorage.getItem("C")==null){//로컬스토리지에 값이 없을 때
      localStorage.setItem("C","(완)어묵우동");//값을 C에 저장
    } 
    else{//로컬스토리지에 값이 있을 때
      localStorage.setItem("C",localStorage.getItem("C")+","+"(완)어묵우동");//전의 값과 현재의 값을 더함
    }
  };
