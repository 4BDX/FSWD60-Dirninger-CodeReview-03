



document.getElementById("food").innerHTML = outPut;


var PInfo = {
	name: "David",
	surname: "Duma",
	age: 23,
	description: "codefactory",
	test: function(){
		return "I am " + this.name + " " + this.surname + "and I am " + this.age + " years old. I started at " + this.description;
	}


}
document.getElementById("text2").innerHTML = PInfo.test();

“John, your insurance costs 300 €”