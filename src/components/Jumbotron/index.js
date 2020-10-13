import React from 'react'
import {
	Section,
	Container,
	Title,
	Description,
	SubSection,
	SubContainer,
	SubTitle,
	SubImage,
	SubIcon,
	SubDescription,
	Image,
	Seperator
} from './styles/JumbotronStyles'

export default function Jumbotron({ children, direction, ...restProps }) {
	return <Section direction={direction}>{children}</Section>
}

Jumbotron.Container = function JumbotronContainer({ children }) {
	return <Container>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({ children }) {
	return <Title>{children}</Title>
}

Jumbotron.Description = function JumbotronDescription({ children }) {
	return <Description>{children}</Description>
}

Jumbotron.SubSection = function JumbotronSubSection({ children }) {
	return <SubSection>{children}</SubSection>
}

Jumbotron.SubContainer = function JumbotronSubContainer({ children }) {
	return <SubContainer>{children}</SubContainer>
}

Jumbotron.SubImage = function JumbotronSubImage({ ...restProps }) {
	return (
		<SubImage>
			<SubIcon {...restProps} />
		</SubImage>
	)
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children }) {
	return <SubTitle>{children}</SubTitle>
}

Jumbotron.SubDescription = function JumbotronSubDescription({ children }) {
	return <SubDescription>{children}</SubDescription>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
	return <Image {...restProps} />
}

Jumbotron.Seperator = function JumbotronSeperator() {
	return <Seperator />
}
