let person = {
    name: "Aziz",
    age: 29,
    hobby: ["oxumaq", "yazmaq", "idman"],
    informationCombine: function () {
        return `name: ${this.name}, age: ${this.age}, hobby: ${this.hobby}`;
    },

    hobbyShow: function () {
        console.log("Hobbiler:");
        this.hobby.forEach(hobby => {
            console.log(hobby);
        });
    }
};


console.log(person.informationCombine());
person.hobbyShow()

