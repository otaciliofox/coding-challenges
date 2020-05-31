var names = ["Otacilio", "Fox", "Maria", "Eduarda", "Foxy", "Sugary", "Dani"];
var fourLetterString = function (arrayNames) {
    var filteredNames = arrayNames.filter(function (name) { return name.length === 4; });
    return filteredNames;
};
console.log(names);
console.log(fourLetterString(names));
