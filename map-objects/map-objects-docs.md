---
lang: en
title:  \<map-objects\> docs
css: map-objects.css
---


The `MapObjects` component is a custom HTML element that represents a map with draggable objects. It allows users to interact with the map by dropping SVG files and dragging objects onto specific paths within the SVG.

<main>
## Usage

To use the `MapObjects` component, follow these steps:

1. Import the component's JavaScript file into your project.
2. Use the `<map-objects>` HTML tag in your markup to create an instance of the `MapObjects` component.
3. Set the `objects-src` attribute on the `<map-objects>` element to specify the URL for fetching the objects data.
4. Implement an endpoint or provide a JSON file at the specified URL that returns an array of objects in the following format:

```json
[
  {
    "language": "Object 1",
    "tags": ["tag1", "tag2"]
  },
  {
    "language": "Object 2",
    "tags": ["tag3", "tag4"]
  },
  ...
]
```

Each object should have a `language` property and an optional `tags` property.

Events

The `MapObjects` component emits the following events:

- dragstart: Triggered when an object is dragged.
- drop: Triggered when an object is dropped onto a path.

Styling

The `MapObjects` component provides the following CSS classes for styling:

- .map-pane: Styling for the map pane container.
- .object-pane: Styling for the object pane container.
- .object: Styling for each draggable object.
- .tags: Styling for the tags container within each object.
- .tag: Styling for each tag within the tags container.
- .selected: Styling for a selected path.
- .hover: Styling when the mouse hovers over a path.

Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MapObjects Example</title>
    <style>
      .map-pane {
        width: 400px;
        height: 300px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
      }

      .object-pane {
        border: 1px solid #ccc;
        padding: 10px;
      }

      .object {
        background-color: #f0f0f0;
        padding: 5px;
        margin-bottom: 5px;
        cursor: move;
      }

      .tags {
        font-size: 12px;
        margin-top: 5px;
      }

      .tag {
        background-color: #f0f0f0;
        padding: 2px 4px;
        margin-right: 5px;
        border-radius: 2px;
      }

      .selected {
        fill: #ff0000;
      }

      .hover {
        fill: #00ff00;
      }
    </style>
  </head>
  <body>
    <map-objects objects-src="path/to/objects.json"></map-objects>

    <script src="path/to/map-objects.js"></script>
  </body>
</html>

```

Replace `path/to/objects.json` with the actual path to your objects data.

Make sure to include the required CSS styles to achieve the desired appearance.

```css

Feel free to modify the example code to suit your needs.

```

## Events

The `MapObjects` component emits the following events:

- dragstart: Triggered when an object is dragged.
- drop: Triggered when an object is dropped onto a path.

## Styling

The `MapObjects` component provides the following CSS classes for styling:

- `.map-pane`: Styling for the map pane container.
- `.object-pane`: Styling for the object pane container.
- `.object:` Styling for each draggable object.
- `.tags:` Styling for the tags container within each object.
- `.tag:` Styling for each tag within the tags container.
- `.selected:` Styling for a selected path.
- `.hover:` Styling when the mouse hovers over a path.

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MapObjects Example</title>
    <style>
      .map-pane {
        width: 400px;
        height: 300px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
      }

      .object-pane {
        border: 1px solid #ccc;
        padding: 10px;
      }

      .object {
        background-color: #f0f0f0;
        padding: 5px;
        margin-bottom: 5px;
        cursor: move;
      }

      .tags {
        font-size: 12px;
        margin-top: 5px;
      }

      .tag {
        background-color: #f0f0f0;
        padding: 2px 4px;
        margin-right: 5px;
        border-radius: 2px;
      }

      .selected {
        fill: #ff0000;
      }

      .hover {
        fill: #00ff00;
      }
    </style>
  </head>
  <body>
    <map-objects objects-src="path/to/objects.json"></map-objects>

    <script src="path/to/map-objects.js"></script>
  </body>
</html>

```

Replace `path/to/objects.json` with the actual path to your objects data.

Make sure to include the required CSS styles to achieve the desired appearance.

</main>