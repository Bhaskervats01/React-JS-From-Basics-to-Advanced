// Create element through JS:
// style = {fontSize: "30px", backgroundColor:"blue", color:"white"};
// const header1 = document.createElement('h1');
// header1.innerText = "Hello coder Army";
// header1.style.backgroundColor ="blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h2');
// header2.innerText = "Kaise ho ap sab log";
// header2.style.backgroundColor ="black";
// header2.style.fontSize = "25px";
// header2.style.color = "white";

// For Header 1:
// const root = document.getElementById("root");
// root.append(header1);
// For Header 2:
// root.append(header2);

// React: object
// ReactDom: object

const React = {
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);

        if(typeof children === 'object'){
            for(let val of children)
                element.append(val);

        }
        else
        element.innerText = children;
        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
}

const ReactDom ={
    render: function(element,root){
        root.append(element);

    }
}

const header1 = React.createElement('h1',{fontSize: "30px", backgroundColor:"blue", color:"white"},"Hello Coder Army");
const header2 = React.createElement('h2',{fontSize: "25px", backgroundColor:"black", color:"white"},"Kaise ho aap sab log");

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");

const Ul = React.createElement('ul',{fontSize:"30px", backgroundColor:"blue",color:"white"}, [li1, li2, li3])

// Unordered List:
// HTML
// CSS
// JS

// ul = document:
// li: create:

ReactDom.render(header1,document.getElementById("root"));
ReactDom.render(header2,document.getElementById("root"));
ReactDom.render(Ul,document.getElementById("root"));





