import React from "react";
import ContentCard from "./ContentCard";
import CardArray from "../../listComponents/CardContent";

export default function ContentSection() {
  return (
    <div>
      {CardArray.map((item, index) => {
        return (
          <ContentCard
            key={index}
            title={item.title}
            svgPath={item.svgPath}
            content={item.content}
            index={index}
          />
        );
      })}
    </div>
  );
}
