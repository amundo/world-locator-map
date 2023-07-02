export class MapObjects extends HTMLElement {
  constructor() {
    super();

    // Create map pane
    const mapPane = document.createElement("div");
    mapPane.classList.add("map-pane");
    this.appendChild(mapPane);

    // Create object pane
    const objectPane = document.createElement("div");
    objectPane.classList.add("object-pane");
    this.appendChild(objectPane);

    // Listen for drop event on map pane
    mapPane.addEventListener("dragover", event => {
      event.preventDefault();
    });

    mapPane.addEventListener("dragenter", event => {
      event.preventDefault();
    });

    mapPane.addEventListener("dragleave", event => {
      event.preventDefault();
    });

    mapPane.addEventListener("drop", event => {
      let dropZone = event.target;
      event.preventDefault();

      // Get the SVG data from the drop event
      const svgFile = event.dataTransfer.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", event => {
        const svgData = event.target.result;
        const svgElement = document.createElement("div");
        svgElement.innerHTML = svgData;
        dropZone.appendChild(svgElement);

        // Look for paths with id attributes in the SVG
        const paths = svgElement.querySelectorAll("path[id]");
        this.listenPaths(paths);
        this.listen();
      });

      reader.readAsText(svgFile);
    }, { once: true });
  }

  static get observedAttributes() {
    return ["objects-src"];
  }

  renderObjects(objects) {
    this.querySelector(".object-pane").innerHTML = "";

    // Render each object as a draggable div in the object pane
    objects.forEach(({ language, tags }) => {
      const objectDiv = document.createElement("div");
      objectDiv.classList.add("object");
      objectDiv.innerHTML = `<strong>${language}</strong> <span class=tags>${
        tags.map(tag => `<span class=tag>${tag}</span>`).join("")
      }</span>`;
      objectDiv.setAttribute("draggable", true);
      objectDiv.setAttribute("id", language);
      this.querySelector(".object-pane").appendChild(objectDiv);

      // Add drag start event listener to the div
      objectDiv.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", language);
      });
    });
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute === "objects-src") {
      fetch(newValue)
        .then(response => response.json())
        .then(objects => {
          this.objects = objects;
          this.renderObjects(objects);
        });
    }
  }

  listen() {
    document.querySelectorAll('path[id]').forEach(path => {
      path.addEventListener('click', e => {
        console.log(e.target);
        e.target.classList.toggle('selected');
      });

      path.addEventListener('mouseenter', e => {
        console.log(e.target);
        e.target.classList.add('hover');
      });

      path.addEventListener('mouseout', e =>
        e.target.classList.remove('hover')
      );
    });
  }

  listenPaths(paths) {
    // Add drag and drop event listeners to the paths
    paths.forEach(path => {
      path.addEventListener("dragover", event => {
        event.preventDefault();
      });

      path.addEventListener("drop", event => {
        event.preventDefault();

        // Get the ID of the path and add it to the tags array of the object
        const objectId = event.dataTransfer.getData("text/plain");
        console.log(objectId);
        const object = this.objects.find(o => o.language === objectId);
        if (object) {
          if (!object.tags) object.tags = [];
          object.tags.push(path.getAttribute("id"));
        }

        this.renderObjects(this.objects);
      });
    });
  }
}

// Define the custom element
customElements.define("map-objects", MapObjects);
