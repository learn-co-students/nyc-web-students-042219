document.addEventListener("DOMContentLoaded", () => {
  // old DOM
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
            children: ["Beef!"]
          },
          {
            tagName: "p",
            attributes: {key: 1},
            children: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quibusdam!"]
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

  function render(element, container){
    container.append(element)
  }


  function createElement(tagName, attributes, children){
    // use the tagname to create an HTML element
    const element = document.createElement(tagName)

    // assign all keys on attributes to my newly created element
    for(let key in attributes){
      element[key] = attributes[key]
    }

    // iterate over children
    // if string, just append to this element
    // if another HTML object, then use the createElement method recursively
    children.forEach(child => {
      if (typeof child === "string"){
        element.append(child)
      } else {
        const childElement = createElement(child.tagName, child.attributes, child.children)

        element.append(childElement)
      }
    })

    return element
  }

  render(
    createElement(
      virtualDOM.tagName, 
      virtualDOM.attributes, 
      virtualDOM.children
    ),
    document.getElementById("root")
  )


})