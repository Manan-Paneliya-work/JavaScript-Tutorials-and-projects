### Events in JS ###
e.g 
-> mouse events(click, double click etc.)
-> keyboard event (keypress, keyup, keydown)
-> form events (submit etc.)
-> print event and many more


# Event Handling in JS #
# 1) inline handling #
-> e.g 
<button onclick="console.log('Button was clicked');>Click me!</button>

# 2) Using methods #
e.g ->
 node.event = (e) => {
    //handle here
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clintX, e.clintY); 
} 

3)
### Event Listners ###
e.g -> 
// Using EventListners is a best practice 

node.addEventListner(event, callback);

node.removeEventListner(event, callback)

** Note : the callback reference should be same to remove 