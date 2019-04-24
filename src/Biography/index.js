import React, { Component } from "react";
import image from "../Assets/Chi-Eta-Phi-1.jpg";

class Biography extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="biography-content">
        <div className="biography-image">
          <img src={image} alt="President" />
        </div>
        <div className="biography-content">
          <p>
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <h1> This Would be the President's name </h1>
          <h3> This would be a small exerpt </h3>
        </div>
      </div>
    );
  }
}

export default Biography;
