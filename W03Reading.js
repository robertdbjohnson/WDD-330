let avatar = {
    name: "Bob",
    age: 25,
    sayHello() {
        alert("Hello!");
    },
    sayName() {
        alert(this.name);
    }
};

// avatar.sayHello = function() {
//     alert("Hello!");
// };

avatar.sayHello();
avatar.sayName();