# react-component-jumbotron-01

Demonstrates the **Jumbotron** feature used on my site (www.millder.com.au).

## Purpose

This is a React component built with scalability in mind.

The Jumbotron in this repository is created as a **container** with components which make up this specific layout.

The explanation and details provided below are based on the references provided in this repository and hopefully can be used for referencing and education purposes.

## npm Packages Used

- styled-components

## In a Nutshell

The **App.js** references the container/component **JumbotronContainer.js** located in the **src/container** folder.

The container loops through the information listed in the object of **jumbotronData.json** file located in the **src/data** folder, which then will be displayed in the Jumbotron.

## Let’s Dive In

### Compound Component

The first thing to note is the use of the **compound component** to create the components that make up this specific layout.

In the **src/components** folder, a component folder named *Jumbotron* is created. In this folder, the following are added:

- an **index.js** file, and
- a **styles** folder, which itself include the **JumbotronStyles.js** file.

#### JumbotronStyles.js

This file lists all the **styled components**, with the use of the ```styled-components``` package.

```javascript
import styled from 'styled-components/macro'
```

This simplifies the CSS process for the components used in this **container**.

> NOTE: The ```macro``` included in the import, simplifies the **class** naming convention when the HTML is inspected.

#### index.js

This file *references* all the styled components in the **JumbotronStyles.js** and provides all the functions needed to construct the *jumbotron*.

The **default** function is used as the **container** or **component wrapper**:

```jsx
export default function Jumbotron({ children, direction, ...restProps }) {
 return <Section direction={direction}>{children}</Section>
}
```

The props ```children``` and the ```…restProps``` (the *rest of props*) should always be included in this function. *In our case we have also included the **direction** prop.*

To build a compound component, use the following format:

```jsx
Jumbotron.Container = function JumbotronContainer({ children }) {
 return <Container>{children}</Container>
}
```

> NOTE: the use of the ```children``` prop.

The constrcution of the *Jumbotron* layout is done in the **JumbotronContainer.js** with the use of **compound component** method as follows:

```jsx
<Jumbotron direction={direction}>
  <Jumbotron.Container>
    <Jumbotron.Title>{title}</Jumbotron.Title>
    <Jumbotron.Description>{description}</Jumbotron.Description>
    <Jumbotron.SubSection>
      <Jumbotron.SubContainer>
        <Jumbotron.SubImage src={sub1Image} alt={sub1Alt} />
        <Jumbotron.SubTitle>{sub1Title}</Jumbotron.SubTitle>
        <Jumbotron.SubDescription>
          {sub1Description}
        </Jumbotron.SubDescription>
      </Jumbotron.SubContainer>
      <Jumbotron.SubContainer>
        <Jumbotron.SubImage src={sub2Image} alt={sub2Alt} />
        <Jumbotron.SubTitle>{sub2Title}</Jumbotron.SubTitle>
        <Jumbotron.SubDescription>
          {sub2Description}
        </Jumbotron.SubDescription>
      </Jumbotron.SubContainer>
    </Jumbotron.SubSection>
  </Jumbotron.Container>
  <Jumbotron.Image src={image} alt={alt} />
</Jumbotron>
```

> NOTE FOR NEWBIES: The **images** referenced in the **jumbotronData.json** actually refer to the those images located in the **public/images** folder (*since the **index.html** located in the public folder is the one being rendered...*).
