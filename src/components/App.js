
import React, { Children } from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {

  const headerContent = <header>Welcome to my website.</header>;
  const footerContent = <footer>©️ 2023 My Website.All rights reserved.</footer>

  return (
    <div>
      <PageLayout header={headerContent} footer={footerContent}>
        <p>This is the content of my website.</p>
      </PageLayout>
    </div>
  )
}

export default App
