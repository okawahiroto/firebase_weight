var myFirebaseRef = new Firebase("https://crackling-heat-6119.firebaseio.com/");
var date = new Date();
console.log(date);
myFirebaseRef.push({
    date: "2016-1-1",
    weight: "87",
    per: "33"
});

function button01() {
    console.log('a');
    var date = document.getElementById("date").value;
    var weight = document.getElementById("weight").value;
    var per = document.getElementById("per").value;
    console.log(date);
    document.getElementById("date").value = date;
    document.getElementById("weight").value = weight;
    document.getElementById("per").value = per;
    myFirebaseRef.push({
        date: date,
        weight: weight,
        per: per
    });
}
