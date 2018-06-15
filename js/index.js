var h2 = document.querySelector('h2');

var xiaoMing = new Person('xiaoming', 16);
h2.innerHTML = xiaoMing.name;

function Person(name, age){
    this.name = name;
    this.age = age;
    this.logInfo = function (){
        alert(this.name);
    };
}

Person.prototype.rage = '666';
Person.prototype.doDownload = function (){
    alert('ok');
}

var xiaoHong = new Student('xiaoHong', 13, ['ok', 'math', 'science']);

function Student(name, age, interists) {
    Person.call(this, name, age);

    this.interists = interists;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.sex = 'nan';

var xiaoGang = Object.create(xiaoMing);

var xiaoHeng = new Student('xiaoHeng');

console.log(xiaoHong.__proto__ === Student.prototype);
console.log(xiaoGang.__proto__ === Student.prototype.__proto__);


function GoodStudent(good, name, age) {
    Student.call(this, name, age);

    this.good = good;
}

GoodStudent.prototype = Object.create(Student.prototype);
GoodStudent.prototype.constructor = GoodStudent;

var xiaoPan =  new GoodStudent('666', 'xiaoPan', 16);

var personJson = {"name":"xiaoMing", "sex":"1", "age":"16"}

console.log(personJson.name+personJson.sex+personJson.age);

var requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function (){
    var receivedJson = request.response;
    console.log(receivedJson);
};