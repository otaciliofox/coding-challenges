var fullname = "Otacilio Fox";
var shufleName = function (fullname) {
    var names = fullname.split(" ");
    return names[1] + " " + names[0];
};
console.log(shufleName(fullname));
