// const courses = [{},{},{},{},{},{},{}] // syntax of array , array's have object elements

const courses = [
  {
    name: "Swaminarayan",
    price: "500",
  },
  {
    name: "swamini vato",
    price: "50",
  },
  {
    name: "bhagavat Geeta",
    price: "55",
  },
  {
    name: "vasudev mahatmay",
    price: "5",
  },
  {
    name: "satsangi jivan",
    price: "15",
  },
];

//1. <></>
//const name = document.createElement("");

//2. <h1></h1>
//const name = document.createElement("h1");

//3. <h1 className="manav"></h1>
//name.classList.add("manav");

//4. <h1 className="manav">value   anyvalue</h1>
//const r1 = document.createTextNode("value "+" anyvalue");
//name.appendChild(r1)

function getList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((manav) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const value1 = document.createTextNode(manav.name);
    li.appendChild(value1);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const value2 = document.createTextNode("$ " + manav.price);
    span.appendChild(value2);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// getList(); = window.addEventListener("load",getList);
// either write anyone

window.addEventListener("load", getList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => (a.price - b.price));
  getList();
});
