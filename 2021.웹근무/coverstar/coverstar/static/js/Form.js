
        var flag = 0;
        const modal = document.getElementById("modal");
        const checkbox1 = document.getElementsByClassName("check-checkbox1");
        const checkbox2 = document.getElementsByClassName("check-checkbox2");


        function ShowModal(){
            modal.style.display = "block";
        }

        function CloseModal(){
            modal.style.display = "none";
        }

        function changeFlag(){
            if(flag==0){
                checkbox1[0].style.display = "none";
                checkbox2[0].style.display = "block";
                flag=1;
            }
            else{
                checkbox1[0].style.display = "block";
                checkbox2[0].style.display = "none";
                flag=0;
            }
        }

        function CheckForm(){
            var email = $('#check2').val()
            var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

            if (!$('#check1').val())
                {
                    document.getElementById('checked1').innerHTML = "<font>이름을 입력해주세요.</font>";
                    alert("이름을 입력해주세요 ");
                    return;
                }
            else{
                document.getElementById('checked1').innerHTML = "<font></font>";
            }
            if (!email || email.match(regExp) == null )
                {
                    document.getElementById('checked2').innerHTML = "<font>이메일 양식이 틀렸습니다.</font>";
                    alert("이메일 양식이 틀렸습니다.");
                    return;
                }
            else{
                document.getElementById('checked2').innerHTML = "<font></font>";
            }
            if (!$('#check3').val())
                {
                    document.getElementById('checked3').innerHTML = "<font>연락처를 입력해주세요.</font>";
                    alert("연락처를 입력해주세요 ");
                    return;
                }
            else{
                document.getElementById('checked3').innerHTML = "<font></font>";
            }
            if (!$('#check4').val())
                {
                    document.getElementById('checked4').innerHTML = "<font>영상링크를 입력해주세요.</font>";
                    alert("영상링크를 입력해주세요 ");
                    return;
                }
            else{
                document.getElementById('checked4').innerHTML = "<font></font>";
            }

            if(flag==1){
                $('#submitted_form').submit();
            }
            else{
                alert("개인정보 취급방침을 동의해주세요 ");
            }
        }