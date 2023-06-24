
import React, { Children } from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {

  const headerContent = <h1>Welcome to my website.</h1>;
  const footerContent = <p>© 2023 My Website. All rights reserved.</p>

  return (
    <div>
      <PageLayout header={headerContent} footer={footerContent}>
        <p>This is the content of my website.</p>
      </PageLayout>
    </div>
  )
}

export default App
