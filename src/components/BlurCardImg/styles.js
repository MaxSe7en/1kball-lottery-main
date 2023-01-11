import styled from "styled-components";

export const Wrapper = styled.div`
	/* display: flex; */
	/* align-items: center; */
	/* justify-content: center; */
	/* border: solid; */
	/* margin: 0 10%; */
	padding: 50px 50px;
	margin: 5% 0%;
	/* height: 768px; */
	border-radius: 1%;
	background: #ffffffbe;
	
	/* backdrop-filter: blur(70px); */
`;

export const Content = styled.div`
		width: 780px;
	p {
		font-size: var(--fontSmall);
		margin-top: 3rem;
	}

	h1 {
		margin-top: 50px;
	}
`;

export const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 70px;

	div {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */
		/* width: 250px; */
	}
	img {
		height: 80px;
		width: 80px;
		margin-left: 1.4rem;
		/* al */
		/* display: inline-block; */
	}
	h2{
		white-space: pre-wrap;
		/* text-align: center; */
	}
`;
