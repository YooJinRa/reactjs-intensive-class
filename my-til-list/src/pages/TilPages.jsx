import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import List from "../components/List";
import Til from "../components/Til";


const TilPages = () => {
  return (
    <Layout>
      <List>
        <Til />
      </List>
      <Form />  
    </Layout>
  );
}

export default TilPages;