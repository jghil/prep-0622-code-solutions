const person = {
  firstName: 'Jay',
  lastName: 'Ghil',
  hobby: 'reading manga'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Special Education Teacher';
console.log("The person's job is:", person.job);

person.previousJob = 'Substitute Teacher';
console.log("The person's previous job was:", person.previousJob);

console.log('The complete person object:', person);
