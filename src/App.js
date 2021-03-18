import React from 'react';

import './App.css';
import { Button, Input, Textarea } from 'components/Form';
import { Section  } from 'components/Layout';
import Card from 'components/Card';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu, { MenuLink } from './components/Menu';
import Employees from 'components/Employees/Employees';
import employeesData from 'data/employeesData';

library.add(faUser);


function App() {
  return (
    <div className="container">
      <div className="leftBar">
        <Menu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact" isActive>Contact</MenuLink>
          <MenuLink to="/posts">Posts</MenuLink>
        </Menu>
      </div>
      <main className="mainContent">
        <Section header="1. Modyfikowalny button">
          <div>
            <Button label="Click me" icon="user" bgColor="alizarin" color="clouds" />
          </div>
          <div>
            <Button label="with defaults" />
          </div>
        </Section>
        <Section header="2. Input i Textarea">
          <div>
            <Input label="Click me" bgColor="alizarin" color="clouds" borderSize="2" borderRadius="10"
              borderColor="carrot" />
          </div>
          <div>
            <Textarea label="Click me" bgColor="alizarin" color="clouds" borderSize="2" borderRadius="12"
            borderColor="carrot" />
          </div>
        </Section>
        <Section header="4. Komponent Card">
          <Card imageSrc="https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1083_1_1433953110.jpg" title="Shrim and Chorizo Paella" intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." showMore  content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...." />
        </Section>

        <Section header="6. Lista pracowników">
          <Employees list={employeesData} />
        </Section>
        </main>
    </div>
  );
}

export default App;
