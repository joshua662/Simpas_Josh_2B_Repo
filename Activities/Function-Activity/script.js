function whatShalliWear(temperature) {
    if (temperature < 60) {
        console.log("Wear a jacket");
    } else if (temperature >= 60 && temperature < 75) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

whatShalliWear(50); 
whatShalliWear(60); 
whatShalliWear(80); 