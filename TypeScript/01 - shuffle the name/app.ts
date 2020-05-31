const fullname = "Otacilio Fox";

const shufleName = (fullname: string): string => {
  const names: string[] = fullname.split(" ");
  return `${names[1]} ${names[0]}`;
};

console.log(shufleName(fullname));
