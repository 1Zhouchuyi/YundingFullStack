let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: 33333
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: 11111
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: 222222
},
]
var avatar = document.querySelector(".avatar");
var Name = document.querySelector(".name");//name命名冲突故改为Name
var age = document.querySelector(".age");
var strengths = document.querySelector(".strengths");
var img = document.querySelector("#img");
var i = localStorage.getItem("i");
function signed() {
    console.log(i);
    console.log(msg[i].name);
    img.src = msg[i].avatar;
    console.log(msg[i].avatar);
    Name.innerHTML = "姓名:" + msg[i].name;
    age.innerHTML = "年龄:" + msg[i].age;
    strengths.innerHTML = "特长:" + msg[i].strengths;
}