import React from 'react';

const PageLayout = ({header,footer,children}) => {
  return (
    <>
        <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
}

export default PageLayout;
