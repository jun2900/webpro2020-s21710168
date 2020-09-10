//Object

let student = {
    firstName: "Jun",
    lastName: "Maramis",
    age: 20,
    IPSemester: [4.0, 3.8, 4.0, 4.0],
    hitungIPK: function() {
        const sumIP = this.IPSemester.reduce((sum, ip) => sum + ip, 0);
        return sumIP / this.IPSemester.length;
    }
};

console.log(student.hitungIPK());
console.log(student.lastName);
