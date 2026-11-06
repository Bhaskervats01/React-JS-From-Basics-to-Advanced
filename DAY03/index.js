const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Kaise ho aap sab");
//ReactDOM.render(element,document.getElementById('root'));

const div1 = React.createElement('div',{},[element,element2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(element);
// Reactroot.rander(element2);

Reactroot.render(div1);