import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Catalog from "../../components/home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";

const HomeScreenWrapper = styled.main``;

const Catalogs = () => {
  const { category } = useParams();

  console.log("Selected Category:", category); // Debugging

  let selectedCatalog = [];

  if (category === "men") {
    selectedCatalog = mensCatalog;
  } else if (category === "women") {
    selectedCatalog = womensCatalog;
  } else if (category === "limelight") {
    selectedCatalog = limelightCatalog;
  } else {
    selectedCatalog = [...mensCatalog, ...womensCatalog, ...limelightCatalog]; // Default case
  }

  console.log("Filtered Products:", selectedCatalog); // Debugging


  return (
    <HomeScreenWrapper>
      <Catalog catalogTitle={`Categories for ${category || "All"}`} products={selectedCatalog} />
    </HomeScreenWrapper>
  );
};

export default Catalogs;
