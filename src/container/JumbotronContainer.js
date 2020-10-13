import React from 'react'
import jumbotronData from '../data/jumbotronData.json'
import Jumbotron from '../components/Jumbotron'

function JumbotronContainer() {
  const lastItem = jumbotronData.length - 1
	return (
		<div>
			{jumbotronData.map((item, index) => {
				const {
					id,
					title,
					description,
					image,
					alt,
					sub1Title,
					sub1Description,
					sub1Image,
					sub1Alt,
					sub2Title,
					sub2Description,
					sub2Image,
					sub2Alt,
					direction
				} = item

				return (
					<div key={id} >
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
						{(index !== lastItem) && <Jumbotron.Seperator />}
					</div>
				)
			})}
		</div>
	)
}

export default JumbotronContainer
