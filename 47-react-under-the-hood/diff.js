document.addEventListener("DOMContentLoaded", () => {
  // incoming DOM
  const virtualDOM = {
    tagName: "div",
    attributes: {id: "front-page", className: "container"},
    children: [
      {
        tagName: "h1",
        attributes: {id: "header", className: "greeting"},
        children: [
          "Hello!"
        ]
      },
      {
        tagName: "div", 
        attributes: {id: "description"}, 
        children: [
          {
            tagName: "p",
            attributes: {key: 0},
            children: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quibusdam!"]
          },
          {
            tagName: "p",
            attributes: {key: 1},
            children: ["Beef AND STEAK!!!!!!"]
          },
          {
            tagName: "p",
            attributes: {key: 2},
            children: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quibusdam!"]
          },          
          {
            tagName: "p",
            attributes: {key: 3},
            children: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quibusdam!"]
          }
        ]
      }
    ]
  }



})