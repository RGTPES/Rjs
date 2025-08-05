
const createHuman = (name,age = 18,roll = User) => {
  return {
    name,
    age,
    roll
  };
};
console.log(createHuman("Nguyễn A", 20, "Student"));
