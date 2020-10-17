let nowplayer = Number(localStorage.getItem("nowplayer"));
let character = [
  {
    id: 0,
    name: "Phong",
    completed: [],
    cimage: "",
  },
  {
    id: 1,
    name: "xxx",
    complete: [],
    cimage: "",
  },
];

// let divanswer1 = document.getElementById("divanswer1");

let screendata = [
  {
    question: `${character[nowplayer].name} vừa mua 1 cái bảng tên cho ngôi nhà, viết lên nó nào!<br> Tạo 1 biến tên houseName, gán giá trị là tên bạn cho nó.<br>var <input id='input1'/> 
    =  "<input id='input2'/>";`,
    input1: "houseName",
    input2: "Volvo",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer1",
    ins: 2,
    answer: "Volvo",
  },
  {
    question: `Bạn ở số nhà 50 đường CSS, biển số nhà bạn là ? <br> Tạo 1 biến tên houseAddress, gán giá trị là số nhà bạn cho nó.<br>var <input id='input1'/> 
    =  <input id='input2'/>;`,
    input1: "houseAddress",
    input2: "50",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer2",
    ins: 2,
    answer: "50",
  },
  {
    question: `Tính số tuổi của bạn, biết nó là tổng của 10 và 5? <br> Tạo 2 biến tên x và y, gán giá trị cho nó và tính tổng 2 số.<br>var <input id='input1'/> 
    =  5;<br>var y = <input id='input2'/>;<br>document.getElementById("demo").innerHTML = x <input id='input3'/> y;`,
    input1: "x",
    input2: "10",
    input3: "+",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer3",
    ins: 3,
    answer: "15",
  },
  {
    question: `Tạo 1 biến z, gán giá trị tổng của x + y cho nó, rồi hiển thị nó trong alert box. <br>var x =  5;<br>var y = 10;<br><input id='input1'/> <input id='input2'/> = x + y;<br><input id='input3'/>('Tôi '+ z +' tuổi');`,
    input1: "var",
    input2: "z",
    input3: "alert",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer4",
    ins: 3,
    answer: "Tôi 15 tuổi",
  },
  {
    question: `Trong cùng 1 dòng code, khai báo 3 biến với tên và giá trị sau:<br>firstName = "Nguyễn"<br>lastName = "${character[nowplayer].name}"<br>
    age = 15<br>var <input id='input1'/> = "Nguyễn"<input id='input2'/> lastName = "<input id='input3'/> <input id='input4'/> = <input id='input5'/>;`,
    input1: "firstName",
    input2: ";",
    input3: `Phong";`,
    input4: "age",
    input5: "15",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer5",
    ins: 5,
    answer: `Nguyễn ${character[nowplayer].name} - 15 tuổi`,
  },
  {
    question: `Sử dụng comments để mô tả kiểu dữ liệu của những biến sau:<br>
    var yearsOld = 15;    //<input id='input1'/><br>
    var lastName = "${character[nowplayer].name}";    //<input id='input2'/><br>
    var x = {<br>
    firstName: "Nguyễn",<br>
  lastName: "${character[nowplayer].name}",<br>
};    //<input id='input3'/>`,
    input1: "number",
    input2: "string",
    input3: `object`,
    tutorial: "https://www.w3schools.com/js/js_datatypes.asp",
    bg: "house.jpg",
    divanswer: "divanswer6",
    ins: 3,
    answer: `Rời khỏi...`,
  },
  {
    question: `Sử dụng length property để alert độ dài của tên quán cafe:<br>
    var cafeName = "MindX Cafe";<br>
    var x = <input id='input1'/>;<br>
    alert(x);`,
    input1: "cafeName.length",
    tutorial: "https://www.w3schools.com/js/js_strings.asp",
    bg: "cafe.png",
    divanswer: "divanswer7",
    ins: 1,
    answer: `10 !!`,
    dialognpc: "Tên quán của chúng tôi<br> có bao nhiêu kí tự?",
  },
  {
    question: `Sử dụng kí tự phù hợp để gọi món Sinh tố 'chuối lạc'.<br>
    var drink = <input id='input1'/>;<br>
    alert(drink);`,
    input1: `"Sinh tố 'chuối lạc'"`,
    tutorial: "https://www.w3schools.com/js/js_strings.asp",
    bg: "cafe.png",
    divanswer: "divanswer8",
    ins: 1,
    answer: `Sinh tố 'chuối lạc'!`,
    dialognpc: "Bạn muốn uống gì?",
  },
  {
    question: `Gộp 2 strings để yêu cầu chi tiết hơn.<br>
    var str1 = "Nhiều đá ";<br>
    var str2 = "ít ngọt";<br>
    alert(<input id='input1'/> <input id='input2'/> <input id='input3'/>);`,
    input1: "str1",
    input2: "+",
    input3: "str2",
    tutorial: "https://www.w3schools.com/js/js_strings.asp",
    bg: "cafe.png",
    divanswer: "divanswer9",
    ins: 3,
    answer: "Nhiều đá ít ngọt",
    dialognpc: "Bạn còn cần gì nữa không?",
  },
  {
    question: `Tìm vị trí của chữ X trong tên quán.<br>
    var cafeName = "MindX Cafe";<br>
    var pos = cafeName.<input id='input1'/>;<br>
    alert(pos + 1);`,
    input1: 'indexOf("X")',
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe.png",
    divanswer: "divanswer10",
    ins: 1,
    answer: "Chữ thứ 4.",
    dialognpc: "Đố bạn tìm ra vị trí<br> của chữ X trong tên quán?",
  },
  {
    question: `Sử dụng slice để gọi tên rút gọn của đồ uống nhé!.<br>
    var drink = "Trà đào hoa quả thạch bạc hà";<br>
    var x = drink.slice(<input id='input1'/>, <input id='input2'/>);<br>
    alert('Thêm 1 ' + x);`,
    input1: "0",
    input2: "7",
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe.png",
    divanswer: "divanswer11",
    ins: 2,
    answer: "Thêm 1 Trà đào.",
    dialognpc: "Bạn muốn dùng thêm gì không?",
  },
  {
    question: `Sử dụng method phù hợp để làm<br> chủ quán vui lòng nào!.<br>
    var txt = "Đồ uống dở tệ!";<br>
    txt = txt.<input id='input1'/>("dở tệ", "rất tuyệt");<br>
    alert(txt);`,
    input1: "replace",
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe.png",
    divanswer: "divanswer12",
    ins: 1,
    answer: "Đồ uống rất tuyệt!",
    dialognpc: "Bạn thấy đồ uống thế nào?",
  },
  {
    question: `Vì khá thích đồ uống quán này nên bạn đã viết lại tên quán và món ưa thích vào giấy:<br>
    trà đào hoa quả thạch bạc hà<br>
    MINDX CAFE<br>
    <br>
    Chuyển đoạn string sau sao cho đúng với trong giấy:<br>
    var txt1 = "Trà Đào Hoa Quả Thạch Bạc Hà";<br>
    var txt2 = "mindx cafe";<br>
    txt1 = txt1.<input id='input1'/>;<br>
    txt2 = txt1.<input id='input2'/>;`,
    input1: "toLowerCase()",
    input2: "toUpperCase()",
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe.png",
    divanswer: "divanswer13",
    ins: 2,
    answer: "Tạm biệt~!",
    dialognpc: "Xin chào và hẹn gặp lại!",
  },
  {
    question: `${character[nowplayer].name} được cô giáo gọi lên bảng. Hãy thể hiện cho cô giáo xem trình độ của ${character[nowplayer].name} nào. 
      <br>
      Em hãy dùng Javascript để thực hiện phép tính 10 x 5. (Hãy trả lời cô bằng cách alert ra màn hình kết quả) 
      <br>
      alert (10 <input id='input1'/> 5);`,
    input1: "*",
    tutorial: "https://www.w3schools.com/js/js_operators.asp",
    bg: "school.jpg",
    divanswer: "divanswer14",
    ins: 1,
    answer: "Dạ 50 ạ",
    dialognpc: `${character[nowplayer].name} cho cô biết 10 x 5 = mấy?!`,
  },
  {
    question: `Vậy 10 : 5 bằng mấy? (Hãy trả lời cô bằng cách alert kết quả ra màn hình) 
      <br>
      alert (10 <input id='input1'/> 5);`,
    input1: "/",
    tutorial: "https://www.w3schools.com/js/js_operators.asp",
    bg: "school.jpg",
    divanswer: "divanswer15",
    ins: 1,
    answer: "Dạ 2 thưa cô",
    dialognpc: `Vậy 10 : 5 bằng mấy?!`,
  },
  {
    question: `Còn phép chia lấy dư thì sao? <br>(Hãy trả lời cô bằng cách alert kết quả ra màn hình) 
      <br>
      alert (15 <input id='input1'/> 9);`,
    input1: "%",
    tutorial: "https://www.w3schools.com/js/js_operators.asp",
    bg: "school.jpg",
    divanswer: "divanswer16",
    ins: 1,
    answer: "Thưa cô 15 chia 9<br> dư 6 ạ.",
    dialognpc: `Vậy 15 : 9 lấy dư <br>thì dư mấy?!`,
  },
  {
    question: `${character[nowplayer].name} hãy điền vào chỗ trống dưới đây chỉ 2 kí tự để giá trị mới của x sẽ là 15 
      <br>
      var x = 10; 
      <br>
      var y = 5; 
      <br>
      x <input id='input1'/> y;`,
    input1: "+=",
    tutorial: "https://www.w3schools.com/js/js_operators.asp",
    bg: "school.jpg",
    divanswer: "divanswer17",
    ins: 1,
    answer: "10 + 5 ạ",
    dialognpc: `Câu này khó hơn nhé,<br>x = 10 làm thế nào ra 15 ?`,
  },
  {
    question: `${character[nowplayer].name} hãy điền vào chỗ trống dưới đây chỉ 2 kí tự để giá trị mới của x sẽ là 50 
      <br>
      var x = 10; 
      <br>
      var y = 5; 
      <br>
      x <input id='input1'/> y;`,
    input1: "*=",
    tutorial: "https://www.w3schools.com/js/js_operators.asp",
    bg: "school.jpg",
    divanswer: "divanswer18",
    ins: 1,
    answer: "Vâng, X nhân 5<br> ra 50 ạ",
    dialognpc: `Vậy thì câu này cũng tương tự thôi nhỉ? <br> x = 10 làm thế nào ra 50? `,
  },
  {
    question: `Làm tiếp vài bài nữa nhé, bạn nào muốn lên tiếp nào? 
      <br>
      (xung phong bằng cách hoàn thiện function dưới đây, với tên funtion là myFunction
      <br>
      <input id='input1'/> <input id='input2'/> <input id='input3'/>
      <br>
        alert("Em tiếp tục xung phong ạ!?");
      <br>
      <input id='input4'/>
      ;`,
    input1: "function",
    input2: "myFunction()",
    input3: "{",
    input4: "}",
    tutorial: "https://www.w3schools.com/js/js_functions.asp",
    bg: "school.jpg",
    divanswer: "divanswer19",
    ins: 4,
    answer: "Em tiếp tục<br> xung phong ạ!?",
    dialognpc: `Làm tiếp vài bài nữa nhé,<br> bạn nào muốn lên tiếp nào? `,
  },
  {
    question: `Lại là ${character[nowplayer].name} thôi à!<br> Thôi cô cho em 10 điểm luôn!? (Hãy cảm ơn cô bằng cách gọi hàm myFunction)
      <br>
      function myFunction() {
        alert("Em cảm ơn cô ạ!");
      }
      <br>
      <input id='input1'/>;
      `,
    input1: "myFunction()",
    tutorial: "https://www.w3schools.com/js/js_functions.asp",
    bg: "school.jpg",
    divanswer: "divanswer20",
    ins: 1,
    answer: "Em cảm ơn<br> cô ạ!",
    dialognpc: `Lại là ${character[nowplayer].name} thôi à!<br> Thôi cô cho em 10 điểm luôn!?`,
  },
  {
    question: `Cô cho bài khác dễ hơn này, 5 x 5 = mấy? (function chỉ trả về kết quả)
      <br>
      function myFunction() {
        <input id='input1'/> <input id='input2'/>;
        }
        <br>
        document.getElementById("demo").innerHTML = myFunction();
      `,
    input1: "return",
    input2: "5 * 5",
    tutorial: "https://www.w3schools.com/js/js_functions.asp",
    bg: "school.jpg",
    divanswer: "divanswer21",
    ins: 2,
    answer: "Bằng 25 ạ",
    dialognpc: `Cô cho bài khác dễ<br> hơn này, 5 x 5 = mấy??`,
  },
  {
    question: `Đặt nội dung thẻ demo là lời đáp 'Vâng ạ!' của bạn với cô 
      <br>
      (Gợi ý: sử dụng thuộc tính innerHTML)
      <br>
      function myFunction() {
        document.<input id='input1'/>("demo").<input id='input2'/> = "Vâng ạ";
      }
      `,
    input1: "getElementById",
    input2: "innerHTML",
    tutorial: "https://www.w3schools.com/js/js_functions.asp",
    bg: "school.jpg",
    divanswer: "divanswer22",
    ins: 2,
    answer: "Vâng ạ!",
    dialognpc: `${character[nowplayer].name} giỏi quá! Để cho<br> các bạn khác giải với nữa nhé!?`,
  },
  //end of operators and function
  // objects
  {
    question: `${character[nowplayer].name} đến nhà Quân chơi, hãy điền nốt thông tin về bạn Quân để hoàn thành khai báo object myFriend.Gender của Quân là "male" nha ~ 
        <br>
        var myFriend = {
            firstname: "Trần Văn",<br>
            lastname: "Quân"<input id='input1'/><br>
            <input id='input2'/>: <input id='input3'/>
        };
        `,
    input1: ",",
    input2: "gender",
    input3: "male",
    tutorial: "https://www.w3schools.com/js/js_objects.asp",
    bg: "friends-house.jpg",
    divanswer: "divanswer23",
    ins: 3,
    answer: "Okee Quân, đi<br> chơi nào bạn hiền :U",
    dialognpc: `Chào ${character[nowplayer].name} nha,<br> đi chơi đê bạn hiền!`,
  },
];

let maparea = {
  school: "operator",
  market: "object",
  house: `var`,
  gamecenter: "event",
  cafe: "string",
  friend: "datatype, functions",
  park: "",
  bookstore: "",
  lake: "",
};

export { character, screendata, maparea };

// phong 1-4
