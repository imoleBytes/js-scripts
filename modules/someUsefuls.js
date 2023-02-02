student = {
    name:'Jide',
    age: 17,
    Gender:'Male',
    exec:false,
    courses:['computer', 'maths', 'eng'],
    speak(){
        console.log(`Hi, i'm ${this.name}`)
    }
}

exports.student = student;

console.log(module)