import "./ProjectCard.css";
import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <div class="card">
        <p class="card__exit">
          <i class="fas fa-times">Title -</i>
        </p>
        <div class="card__icon">
          <i class="fas fa-bolt">{this.props.title}</i>
        </div>

        <p class="card__exit">
          <i class="fas fa-times">Technology -</i>
        </p>
        <div class="card__icon">
          <i class="fas fa-bolt">{this.props.technology}</i>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
