import React from 'react'
import listOfImages from "../../data/filteredImages";

export default function ListOfImg({ sku, width, height, index }) {
  const image = Object.values(listOfImages);

  return (
    <div class="col" style={{ width: width }} key={index}>
      <>
        <img
          src={image.filter((img) => img.includes(sku + "-1-product"))}
          class="card-img-top picture1"
          alt={image.filter((img) => img.includes(sku + "-1-product"))}
          width={width}
          height={height}
        />
        <img
          src={image.filter((img) => img.includes(sku + "-2-product"))}
          class="card-img-top picture2"
          alt={image.filter((img) => img.includes(sku + "-2-product"))}
          width={width}
          height={height}
        />
      </>
    </div>
  );
}
