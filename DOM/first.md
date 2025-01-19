Starter Code 
<style> tag connects HTML with CSS.
<script> tag connects HTML with JS.


Window object (automatically always presented when html running ) with lots of properties and functions

**  DOM Manipulation 

1) Selecting with id 
-> document.getElementById("myid")

2) Selecting with class 
-> document.getElementByClassName("myClass")

3) Selecting with tag 
-> document.getElementByTagName("p")


** DOM (using query selector)


 1) document.querySelector(my/mycla)      
  d  ocument.querySelectorAll("myid") 

** DOM properties

1) tagName : return tag for element nodes
2) innerText : return the text content of the element and all its childern
3) innerHtml : return the plain text or HTMl
4) textContent : return textual content even for hidden elements heading 


/* ## Attributes ## */

-> getAttribute(attr) // to get attribute value
-> setAttribute(attr, value) // 

## Style ## 
-> node.style
e.g - h1.style.backgroundColor = "green" ;


## Insert Element ##

let el = document.createElement("div")


1) node.append(el) // adds at the end of node(inside)
2) node.prepend(el) // adds at the start of node (inside)
3) node.before(el) //before the node(outside)
4) node.after(el) //adds after the node (el)

## Delete Element ## 

node.remove() // remove the node

e.g -> 
let el = document.createElement("div")
let box = document.querySelector(".box");
box.append(el);


## add class name in element ##
-> div.classList.add("newClass");
-> div.classList.remove("foo"); 

// it is possible that element contains multiple class
e.g -> <div class="container newContainer">  </div>