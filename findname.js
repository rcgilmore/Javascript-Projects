text = "blah blah blah Rebecca blah blah blah \
blah Rebecca blah blah text Rebecca yellow \
orange bananas cherries Rebecca boat circle";

var myName = "Rebecca";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "R" ) {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
};

if (hits.length === 0) {
    conosle.log("Your name wasn't found!");
} else {
    console.log(hits);
};

//Think about how you might fine-tune this program to make sure it only finds exact matches for your name. Search the Internet to see if there are any built-in JavaScript string methods that can help!