let nowplayer = Number(localStorage.getItem("nowplayer"));
let character = [
  // {
  //   id: 0,
  //   name: "Phong",
  //   completed: [],
  //   cimage: "c1.png",
  //   avatar: "c-1.png",
  // },
  // {
  //   id: 1,
  //   name: "xxx",
  //   completed: [],
  //   cimage: "c3.png",
  //   avatar: "c-3.png",
  // },
];
// localStorage.setItem("character", `${JSON.stringify(character)}`);
if (JSON.parse(localStorage.getItem("character")) == null) {
  localStorage.setItem("character", `${JSON.stringify(character)}`);
} else {
  character = JSON.parse(localStorage.getItem("character"));
}

// let divanswer1 = document.getElementById("divanswer1");

let screendata = [
  {
    question: `${character[nowplayer].name} vừa mua 1 cái bảng tên cho ngôi nhà, viết lên nó nào!<br> Tạo 1 biến tên houseName, gán giá trị là tên bạn cho nó.<br>var <input id='input1'/> 
    =  "<input id='input2'/>";`,
    input1: "houseName",
    input2: `${character[nowplayer].name}`,
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer1",
    ins: 2,
    answer: `Nhà của ${character[nowplayer].name}`,
    hint: `var houseName = "${character[nowplayer].name}";`,
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
    hint: `var houseAddress = 50; `,
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
    hint: `var x =  5;<br>var y = 10;<br>document.getElementById("demo").innerHTML = x + y;`,
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
    hint: `var x =  5;<br>var y = 10;<br>var z = x + y;<br>alert('Tôi '+ z +' tuổi');`,
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
    hint: `var firstName = "Nguyễn"; lastName = "Phong"; age = 15;`,
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
    hint: `var yearsOld = 15;    //<input id='input1'/><br>
    var lastName = "${character[nowplayer].name}";    //number<br>
    var x = {<br>
    firstName: "Nguyễn",<br>
  lastName: "${character[nowplayer].name}",<br>
};    //object`,
  },
  {
    question: `Sử dụng length property để alert độ dài của tên quán cafe:<br>
    var cafeName = "MindX Cafe";<br>
    var x = <input id='input1'/>;<br>
    alert(x);`,
    input1: "cafeName.length",
    tutorial: "https://www.w3schools.com/js/js_strings.asp",
    bg: "cafe-bg.png",
    divanswer: "divanswer7",
    ins: 1,
    answer: `10 !!`,
    dialognpc: "Đố cháu tên quán của tôi<br> có bao nhiêu kí tự?",
    hint: `var x = cafeName.length;`,
  },
  {
    question: `Sử dụng kí tự phù hợp để gọi món Sinh tố 'chuối lạc'.<br>
    var drink = <input id='input1'/>;<br>
    alert(drink);`,
    input1: `"Sinh tố 'chuối lạc'"`,
    tutorial: "https://www.w3schools.com/js/js_strings.asp",
    bg: "cafe-bg.png",
    divanswer: "divanswer8",
    ins: 1,
    answer: `Sinh tố 'chuối lạc'!`,
    dialognpc: "Uống gì hả cháu?",
    hint: `var drink = "Sinh tố 'chuối lạc'"`,
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
    bg: "cafe-bg.png",
    divanswer: "divanswer9",
    ins: 3,
    answer: "Nhiều đá ít ngọt",
    dialognpc: "Yêu cầu gì nữa không?",
    hint: `alert(str1 + str2);`,
  },
  {
    question: `Tìm vị trí của chữ X trong tên quán.<br>
    var cafeName = "MindX Cafe";<br>
    var pos = cafeName.<input id='input1'/>;<br>
    alert(pos + 1);`,
    input1: 'indexOf("X")',
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe-bg.png",
    divanswer: "divanswer10",
    ins: 1,
    answer: "Chữ thứ 4.",
    dialognpc: "Đố cháu tìm ra vị trí<br> của chữ X trong tên quán?",
    hint: `var pos = cafeName.indexOf("X");`,
  },
  {
    question: `Sử dụng slice để gọi tên rút gọn của đồ uống nhé!.<br>
    var drink = "Trà đào hoa quả thạch bạc hà";<br>
    var x = drink.slice(<input id='input1'/>, <input id='input2'/>);<br>
    alert('Thế cháu thêm 1 ' + x);`,
    input1: "0",
    input2: "7",
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe-bg.png",
    divanswer: "divanswer11",
    ins: 2,
    answer: "Thế cháu thêm 1 Trà đào.",
    dialognpc: "Cốc nữa nhá?",
    hint: `var x = drink.slice(0, 7);`,
  },
  {
    question: `Sử dụng method phù hợp để làm<br> chủ quán vui lòng nào!.<br>
    var txt = "Đồ uống dở tệ!";<br>
    txt = txt.<input id='input1'/>("dở tệ", "tàm tạm thôi");<br>
    alert(txt);`,
    input1: "replace",
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe-bg.png",
    divanswer: "divanswer12",
    ins: 1,
    answer: "Đồ uống tàm tạm thôi!",
    dialognpc: "Thấy đồ uống thế nào?",
    hint: `txt = txt.replace("dở tệ", "rất tuyệt")`,
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
    txt2 = txt2.<input id='input2'/>;`,
    input1: "toLowerCase()",
    input2: "toUpperCase()",
    tutorial: "https://www.w3schools.com/js/js_string_methods.asp",
    bg: "cafe-bg.png",
    divanswer: "divanswer13",
    ins: 2,
    answer: "Nếu mai cháu còn tiền~!",
    dialognpc: "Mai lại đến nhớ!",
    hint: `txt1 = txt1.toLowerCase();<br>
    txt2 = txt2.toUpperCase();`,
  },
  {
    question: `${character[nowplayer].name} được cô giáo gọi lên bảng. Hãy thể hiện cho cô giáo xem trình độ của ${character[nowplayer].name} nào. 
      <br>
      Hãy dùng Javascript để thực hiện phép tính 10 x 5. (Hãy trả lời cô bằng cách alert ra màn hình kết quả) 
      <br>
      alert (10 <input id='input1'/> 5);`,
    input1: "*",
    tutorial: "https://www.w3schools.com/js/js_operators.asp",
    bg: "school.jpg",
    divanswer: "divanswer14",
    ins: 1,
    answer: "Dạ 50 cô ơi",
    dialognpc: `${character[nowplayer].name} cho cô biết 10 x 5 = mấy?!`,
    hint: `alert (10 * 5);`,
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
    hint: `alert (10 / 5);`,
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
    hint: `alert (15 % 9);`,
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
    hint: `x += y;`,
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
    answer: "Lấy X nhân 5<br> ra 50 ạ",
    dialognpc: `Vậy thì câu này cũng tương tự thôi nhỉ? <br> x = 10 làm thế nào ra 50? `,
    hint: `x *= y;`,
  },
  {
    question: `Làm tiếp vài bài nữa nhé, bạn nào muốn lên tiếp nào? 
      <br>
      (xung phong bằng cách hoàn thiện function dưới đây, với tên funtion là myFunction
      <br>
      <input id='input1'/> <input id='input2'/> <input id='input3'/>
      <br>
        alert("Em tiếp tục nữa ạ!");
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
    answer: "Em tiếp tục<br> nữa ạ!",
    dialognpc: `Làm tiếp vài bài nữa nhé,<br> bạn nào muốn lên tiếp nào? `,
    hint: `function myFunction() {<br>
      alert("Em tiếp tục nữa ạ!");<br>
    };`,
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
    answer: "Thank <br> cô ạ!",
    dialognpc: `Lại là ${character[nowplayer].name} thôi à!<br> Thôi cô cho em 10 điểm luôn!?`,
    hint: `myFunction()`,
  },
  {
    question: `Cô cho bài cuối nhé, 5 x 5 = mấy? (function chỉ trả về kết quả)
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
    dialognpc: `Cô cho bài cuối nhé,<br>5 x 5 = mấy??`,
    hint: `return 5 * 5`,
  },
  {
    question: `Đặt nội dung thẻ demo là lời chào 'Tạm biệt cô!' của bạn với cô 
      <br>
      (Gợi ý: sử dụng thuộc tính innerHTML)
      <br>
      function myFunction() {
        document.<input id='input1'/>("demo").<input id='input2'/> = "Tạm biệt cô!";
      }
      `,
    input1: "getElementById",
    input2: "innerHTML",
    tutorial: "https://www.w3schools.com/js/js_functions.asp",
    bg: "school.jpg",
    divanswer: "divanswer22",
    ins: 2,
    answer: "Tạm biệt cô!",
    dialognpc: `${character[nowplayer].name} giỏi quá!<br> Hôm nay học đến đây thôi, chào các em!`,
    hint: `document.getElementById("demo").innerHTML = "Tạm biệt cô!";`,
  },
  //end of operators and function
  // objects
  {
    question: `${character[nowplayer].name} đến nhà Phong chơi, hãy điền nốt thông tin về bạn Phong để hoàn thành khai báo object myFriend.Nhớ gender của Phong là "male" nha ~ 
        <br>
        var myFriend = {
            firstname: "Nguyễn",<br>
            lastname: "Phong"<input id='input1'/><br>
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
    answer: "Có tiếng trong nhà thằng Phong,<br> chắc nó có nhà đây :U",
    dialognpc: `!@#$%^&&*(_+)....`,
    hint: `lastname: "Phong",<br>
    gender: male`,
  },
  {
    question: `Gọi nó ra mở cửa nào! (Hãy gọi firstName nhé, gọi lastName Phong dỗi Phong không ra đâu :) )
        <br>
        var myFriend = {
            firstName: "Phong",
            lastName: "Nguyen",
            gender: "con trai"
        };
        <br>
        alert (<input id='input1'/>);
        `,
    input1: "myFriend.firstName",
    tutorial: "https://www.w3schools.com/js/js_objects.asp",
    bg: "friends-house.jpg",
    divanswer: "divanswer24",
    ins: 1,
    answer: "Phong êiiiii!",
    dialognpc: `!@#$%^&&*(_+)....`,
    hint: `alert (myFriend.firstName);`,
  },
  {
    question: `Phong hôm nay trông phong độ quá. Hãy khen Phong xã giao một cái đi. Khen xã giao thôi mà, đừng ngại!!
        <br>
        var myFriend = {
            firstName: "Phong",
            appearance: "đẹp zai"
        };
        <br>
        alert (<input id='input1'/> + ", mày hôm nay trông" + " <input id='input2'/> " + "phết nhờ!");
        `,
    input1: "myFriend.firstname",
    input2: "myFriend.appearance",
    tutorial: "https://www.w3schools.com/js/js_objects.asp",
    bg: "friends-house.jpg",
    divanswer: "divanswer25",
    ins: 2,
    answer: "Oke Phong, mày hôm nay<br> trông đẹp zai phết nhờ!",
    dialognpc: `Ra đêi, từ từ bạn<br> eeiiii, zô nhà chơi nào`,
    hint: `alert (myFriend.firstname + ", mày hôm nay trông" + " myFriend.appearance " + "phết nhờ!");`,
  },
  {
    question: `Nay bố mẹ ${character[nowplayer].name} vắng nhà, ${character[nowplayer].name} phải tự đi chợ. Ngoài chợ có rất nhiều hàng, quán bán nhiều loại mặt hàng khác nhau: "quần áo", "đồ ăn vặt", "hoa quả". ${character[nowplayer].name} thấy có cửa hàng x bán quần áo. Hãy lấy giá trị "quần áo" từ mảng market và gán cho biến x
        <br>
        var market = ["đồ ăn vặt", "quần áo", "hoa quả"];
        <br>
        var x = <input id='input1'/>;
        `,
    input1: "market[1]",
    tutorial: "https://www.w3schools.com/js/js_arrays.asp",
    bg: "market.jpg",
    divanswer: "divanswer26",
    ins: 1,
    answer: "Tiền đâu mà mua quần áo !",
    dialognpc: `Vào xem hàng cháu ơiii`,
    hint: `var x = market[1];`,
  },
  {
    question: `Đi ngang qua một quán chè quen thuộc, ${character[nowplayer].name} chợt nhận ra hôm trước còn nợ 1 cốc chè chưa trả tiền ở đây, mà hôm nay đi từ xa bà chủ quán đã í ới. Hãy đổi giá trị đầu tiên trong mảng market thành "Mai đi cô!"
        <br>
        var market = ["đồ ăn vặt", "quần áo", "hoa quả"];
        <br>
        <input id='input1'/> = "Mai đi cô!";
        `,
    input1: "market[0]",
    tutorial: "https://www.w3schools.com/js/js_arrays.asp",
    bg: "market.jpg",
    divanswer: "divanswer27",
    ins: 1,
    answer: "Mai đi cô!",
    dialognpc: `A thằng ${character[nowplayer].name},<br>trả tao...`,
    hint: `market[0] = "Mai đi cô!";`,
  },
  {
    question: `Đi chợ muộn nên ngoài chợ chỉ còn vài quán mở cửa thôi. Hãy alert ra số lượng quán vẫn đang mở từ mảng open dưới đây.
        <br>
        var openStore = ["đồ bếp", "quần áo", "hoa quả"];
        <br>
        alert (<input id='input1'/> + " cô bán cố à?");
        `,
    input1: "openStore.length",
    tutorial: "https://www.w3schools.com/js/js_arrays.asp",
    bg: "market.jpg",
    divanswer: "divanswer28",
    ins: 1,
    answer: "3 cô bán cố à?",
    dialognpc: `Quả đi...<br>Quần áo đi...<br>Xoong chảo đê...`,
    hint: `alert (openStore.length + " cô bán cố à?");`,
  },
  {
    question: `Vào sạp bán hoa quả, ${character[nowplayer].name} chọn được vài loại quả vào giỏ, tuy nhiên, ${character[nowplayer].name} vừa nhặt nhầm một quả "táo" thối, hãy bỏ quả quả táo cuối cùng vừa bỏ vào giỏ ra, bằng cách xoá phần tử cuối cùng trong mảng fruit.
        <br>
        var fruits = ["nải chuối", "cam", "táo"];
        <br>
        <input id='input1'/>;
        `,
    input1: "fruits.pop()",
    tutorial: "https://www.w3schools.com/js/js_arrays.asp",
    bg: "market.jpg",
    divanswer: "divanswer29",
    ins: 1,
    answer: "Táo thối này, cháu bỏ lại<br> lấy 2 quả đầu tiên thôi nhá",
    dialognpc: `Lấy nhiều vào cháu, tươi mà<br> rẻ lắm nhá hề hề hề....`,
    hint: `fruits.pop();`,
  },
  {
    question: `${character[nowplayer].name} muốn mua thêm một quả bưởi. Hãy thêm "mít" vào vị trí cuối của mảng fruit.
        <br>
        var fruits = ["nải chuối", "cam"];
        <br>
        <input id='input1'/>;
        `,
    input1: 'fruits.push("mít")',
    tutorial: "https://www.w3schools.com/js/js_arrays.asp",
    bg: "market.jpg",
    divanswer: "divanswer30",
    ins: 1,
    answer: "Thế lấy thêm quả mít...",
    dialognpc: `Thôi được rồi, lấy nữa đi<br> cô giảm giá 80% cho...`,
    hint: `fruits.push("mít");`,
  },
  {
    question: `Sau khi chọn một hồi rất lâu, ${character[nowplayer].name} trả tiền. Tuy nhiên, ${character[nowplayer].name} đã nhận ra mình không có đủ tiền, dù rất muối mặt nhưng ${character[nowplayer].name} vẫn phải trả lại quả "cam". Hãy bỏ "cam" ra khỏi mảng fruits.
        <br>
        var fruits = ["nải chuối", "cam", "mít"];
        <br>
        fruits.splice(<input id='input1'/>, <input id='input2'/>);
        `,
    input1: "1",
    input2: "1",
    tutorial: "https://www.w3schools.com/js/js_arrays.asp",
    bg: "market.jpg",
    divanswer: "divanswer31",
    ins: 2,
    answer: "Còn có 50k,<br> thôi lại trả quả cam... :X",
    dialognpc: `Khôn như cún,<br> thôi thì 55 nghìn...`,
    hint: `fruits.splice(1, 1);`,
  },
  {
    question: `${character[nowplayer].name} rất thường xuyên vào hiệu sách, ${character[nowplayer].name} chỉ thích những sách mỏng mà rẻ, vì ${character[nowplayer].name} rất lười đọc sách (??). Hãy so sánh giá tiền của 2 quyển sách dưới đây để đưa ra màn hình kết quả true.
        <br>
        var 1000CachLamGiau = 200;
        <br>
        var 500CachTanGai = 300;
        <br>
        alert (500CachTanGai <input id='input1'/> 1000CachLamGiau);
        `,
    input1: ">",
    tutorial: "https://www.w3schools.com/js/js_comparisons.asp",
    bg: "bookstore.jpg",
    divanswer: "divanswer32",
    ins: 1,
    answer:
      "1000CachLamGiau có vẻ rẻ mà hay,<br> oke cho cháu quyển 500CachTanGai",
    dialognpc: `Mua quyển nào cháu?`,
    hint: `alert (500CachTanGai > 1000CachLamGiau);`,
  },
  {
    question: `${character[nowplayer].name} thấy có 2 quyển sách giá như nhau. Hãy so sánh giá tiền của 2 quyển sách dưới đây để đưa ra màn hình kết quả true.
        <br>
        var 500CachTanGai = 300;
        <br>
        var 555CachTanGai = 300;
        <br>
        alert (x <input id='input1'/> y);
        `,
    input1: "==",
    tutorial: "https://www.w3schools.com/js/js_comparisons.asp",
    bg: "bookstore.jpg",
    divanswer: "divanswer33",
    ins: 1,
    answer: "Giá bằng nhau mà<br> lãi hẳn 55 cách, duyệt ",
    dialognpc: `Còn quyển 555CachTanGai<br> cũng hay nè cháu?`,
    hint: `alert (x == y);`,
  },
  {
    question: `${character[nowplayer].name} thấy giá sale lại khác nhau, ${character[nowplayer].name} lại nghĩ lại. So sánh lại giá của 2 quyển sách dưới đây, điền 3 kí tự để đưa ra màn hình kết quả true.
        <br>
        var 500CachTanGai = 240;
        <br>
        var 555CachTanGai= 270;
        <br>
        alert (x <input id='input1'/> y);
        `,
    input1: "!==",
    tutorial: "https://www.w3schools.com/js/js_comparisons.asp",
    bg: "bookstore.jpg",
    divanswer: "divanswer34",
    ins: 1,
    answer: "Thế thôi <br>lấy quyển 500 cho rẻ",
    dialognpc: `500CachTanGai sale 20 % = 240k<br>555CachTanGai sale 10% = 270k nhé!`,
    hint: `alert (x !== y);`,
  },
  {
    question: `${character[nowplayer].name} thích mua quyển sách làm giàu quá. Tuy nhiên, nghĩ lại phương châm của bản thân, số tiền trong ví, ${character[nowplayer].name} quyết định ko mua. Tuy nhiên ${character[nowplayer].name} chỉ mua khi giá quyển này nhỏ hơn 110.000đ. Hãy hoàn thiện câu điều kiện dưới đây.
        <br>
        if <input id='input1'/> x < 101 <input id='input2'/> <input id='input3'/>
        alert ("Giảm 50% thì mua");
        <input id='input4'/>
        `,
    input1: "(",
    input2: ")",
    input3: "{",
    input4: "}",
    tutorial: "https://www.w3schools.com/js/js_comparisons.asp",
    bg: "bookstore.jpg",
    divanswer: "divanswer35",
    ins: 4,
    answer: "Giảm 50% thì mua",
    dialognpc: `Mua luôn quyển<br>1000CachLamGiau ko cháu?`,
    hint: `if ( x < 101 ) {
    alert ("Giảm 50% thì mua");
  }`,
  },
  {
    question: `Ông chủ giảm cho còn 120k, ${character[nowplayer].name} đã suy nghĩ lại. Nếu chỉ trả thêm 20.000đ, thì ${character[nowplayer].name} vẫn muốn suy nghĩ thêm, vì đang cần tiền mua iPhone12, dẫn bạn gái đi chơi, ${character[nowplayer].name} muốn lấy le với bạn gái. Hãy hoàn thiện câu điều kiện dưới đây.
        <br>
        <input id='input1'/> ( x <input id='input2'/> 101 ) {<br>
            alert ("Giảm 50% thì mua");<br>
        } <input id='input3'/> {<br>
            alert ("Cũng được. Chốt!!!");<br>
        }
        `,
    input1: "if",
    input2: "<",
    input3: "else",
    tutorial: "https://www.w3schools.com/js/js_comparisons.asp",
    bg: "bookstore.jpg",
    divanswer: "divanswer36",
    ins: 3,
    answer: "Cũng được. Chốt!!!",
    dialognpc: `Giá chót 120k!!`,
    hint: `if ( x < 101 ) {<br>
      alert ("Giảm 50% thì mua");<br>
  } else {<br>
      alert ("Cũng được. Chốt!!!");<br>
  }`,
  },
  {
    question: `${character[nowplayer].name} hay chạy ở công viên. Công viên có đường chạy xung quanh khép kín. Mỗi lần chạy qua cổng công viên, ${character[nowplayer].name} lại chào bác bảo vệ một lần. Hãy đếm lần lượt số vòng mà ${character[nowplayer].name} chạy được từ vòng 0 đến vòng 9.
        <br>
        var i;<br>
        <input id='input1'/> ( <input id='input2'/> = <input id='input3'/>; <input id='input4'/> < 10; <input id='input5'/>) {
            console.log("Chào bác lần " + i + " nha!!");
        }
        `,
    input1: "for",
    input2: "i",
    input3: "0",
    input4: "i",
    input5: "i++",
    tutorial: "https://www.w3schools.com/js/js_loop_for.asp",
    bg: "park.jpg",
    divanswer: "divanswer37",
    ins: 5,
    answer: "Chào bác lần 10 nha!!",
    dialognpc: `Bé mà khỏe nhỉ!!`,
    hint: `var i;<br>
    for ( i = 0; 0 < 10; i++) {
        console.log("Chào bác lần " + i + " nha!!");
    }`,
  },
  {
    question: `${character[nowplayer].name} mang theo 1 chai nước 500ml khi chạy ở công viên. Trung bình sau mỗi 1 phút, ${character[nowplayer].name} lại uống hết 8ml. ${character[nowplayer].name} sẽ về nhà khi hết sạch nước. Hoàn thiện vòng while loop dưới đây để thể hiện điều đó.
        <br>
        var water = 500;<br>
        <input id='input1'/> ( water > <input id='input2'/> ) {
            water -= 8;
        }
        `,
    input1: "while",
    input2: "0",
    tutorial: "https://www.w3schools.com/js/js_loop_while.asp",
    bg: "park.jpg",
    divanswer: "divanswer38",
    ins: 2,
    answer: "Hết xăng mỏi cẳng<br> rồi bác ơi",
    dialognpc: `Nghỉ rồi à cháu!!`,
    hint: `var water = 500;<br>
    while ( water > 0 ) {
        water -= 8;
    }`,
  },
];

let maparea = {
  school: "operator",
  market: "object",
  house: `var`,
  cafe: "string",
  friend: "datatype, functions",
  park: "",
  bookstore: "",
};

export { character, screendata, maparea };

// phong 1-4
