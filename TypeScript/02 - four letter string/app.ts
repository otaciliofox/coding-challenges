const names = ["Otacilio", "Fox", "Maria", "Eduarda", "Foxy", "Sugary", "Dani"];

const fourLetterString = (arrayNames: string[]): string[] => {
  const filteredNames = arrayNames.filter((name) => name.length === 4);
  return filteredNames;
};

console.log(names);
console.log(fourLetterString(names));
