
    var button1 = document.getElementById("myButton1");
    var button2 = document.getElementById("myButton2");
    var button3 = document.getElementById("myButton3");
    var button4 = document.getElementById("myButton4");


    // 결과를 표시할 iframe 엘리먼트 가져오기
    var resultFrame = document.getElementById("resultFrame");

    // 버튼에 클릭 이벤트 리스너 추가
    button1.addEventListener("click", function() {
      // 다른 HTML 문서를 iframe에 표시
      resultFrame.src = "reports/register_html.html";
    });
    button2.addEventListener("click", function() {
      // 다른 HTML 문서를 iframe에 표시
      resultFrame.src = "reports/register_CSS5.html";
    });
    button3.addEventListener("click", function() {
      // 다른 HTML 문서를 iframe에 표시
      resultFrame.src = "reports/register_bt5.html";
    });
    button4.addEventListener("click", function() {
      // 다른 HTML 문서를 iframe에 표시
      resultFrame.src = "reports/report4.html";
    });