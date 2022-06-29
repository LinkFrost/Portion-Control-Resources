import React from "react";
import Resource from "./Resource.js";
import resources from "../resources.json";
import "../Styles/Resource.css";

function ResourceList() {
  const resourceComponents = resources.map((r) => <Resource key={r.title} title={r.title} img={r.img} url={r.url} description={r.description}></Resource>);

  return (
    <div className="resourceListContainer">
      <dl className="resourceList">{resourceComponents}</dl>
    </div>
  );
}

export default ResourceList;
