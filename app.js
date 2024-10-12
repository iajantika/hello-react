// const parent1 = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I am H1 tag"),
//         React.createElement("h2", {}, "I am H2 tag")
//     ]
//     )
// );

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h2", {}, "I am H2 tag")]
    ),
        React.createElement("div", {}, [
            React.createElement("h1", {}, "I am ch2 H1 tag"),
            React.createElement("h2", {}, "I am ch2 H2 tag")
        ]),
    ]);


const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);