import styled from 'styled-components/macro'

export const Section = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ direction }) => direction};
	@media (max-width: 992px) {
		display: block;
	}
`

export const Container = styled.div`
	width: 50%;
	margin: 0 0.5rem;
	margin-top: 1.5rem;
	@media (max-width: 992px) {
		width: 100%;
	}
`

export const Title = styled.h2`
	font-size: 30px;
	position: relative;
	padding-bottom: 1rem;
	font-weight: 700;
	line-height: 1.1;
`

export const Description = styled.p`
	padding-top: 0.25rem;
	padding-bottom: 2rem;
	line-height: 1.8;
	font-size: 1rem;
	opacity: 0.65;
`

export const Image = styled.img`
	width: 500px;
	height: 500px;
	@media (max-width: 992px) {
		display: none;
	}
`

export const SubSection = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 992px) {
		display: block;
	}
`

export const SubContainer = styled.div`
	width: 50%;
	margin: 0 0.5rem;
	margin-top: 1.5rem;
	@media (max-width: 992px) {
		width: 100%;
		margin: 0;
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

export const SubImage = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 5px;
	margin: 0;
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #c54549;
	font-size: 1.75rem;
	color: #fff;
`

export const SubIcon = styled.img`
	width: 40px;
	height: 40px;
`

export const SubTitle = styled.h3`
	font-size: 20px;
	padding-bottom: 0.85rem;
	position: relative;
	padding-bottom: 1rem;
	font-weight: 700;
	line-height: 1.1;
`

export const SubDescription = styled.p`
	padding-top: 0.25rem;
	padding-bottom: 2rem;
	line-height: 1.8;
	font-size: 0.85rem;
	opacity: 0.65;
	@media (max-width: 992px) {
		text-align: center;
	}
`

export const Seperator = styled.hr`
	border: 0;
	height: 0;
	margin: 0;
	margin-top: 2rem;
	margin-bottom: 4rem;
	clear: both;
  border-top: 1px solid #a7a7a79b;
  `
