function getRelationship(x,y) {
	if (typeof x === "number" && typeof y === "number") {
		if (x===y) {
			console.log(x+" and "+y+" are equal.");
		}	
		if (x<y) {
			console.log(x+" is less than "+y+".");
		}	
		if (x>y) {
			console.log(x+" is greater than "+y+".");
		} 
	} else {
		if (typeof x != "number" && typeof y === "number") {
			console.log("Can't compare relationships because "+x+" is not a number.");
		}
		if (typeof x === "number" && typeof y != "number") {
			console.log("Can't compare relationships because "+y+" is not a number.");
		}
		if (typeof x != "number" && typeof y != "number") {
			console.log("Can't compare relationships because "+x+" and "+y+" are not numbers.");
		}
	}
}