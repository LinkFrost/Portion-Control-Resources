import React, { useState } from "react";
import "../Styles/Resource.css";

function Resource(props) {
  const { title, img, url, description } = props;
  console.log(img);
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <dt className={expand ? "resource-title expanded" : "resource-title"} onClick={() => setExpand(!expand)}>
        <h3>{title}</h3>
      </dt>
      <dd className={expand ? "content expanded" : "content"} onClick={() => setExpand(!expand)}>
        <img src={img} alt={title}></img>
        <p>{description}</p>
        <a href={url} target="_blank">
          Check it out!
        </a>
      </dd>
    </div>
  );
}

export default Resource;
