import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: var(--white);
	height: 100px;
	border-radius: 5px;
	box-shadow: 1px 1px 30px 1px #bbbbbb;
	padding: 20px;
	margin: 0 20px;
`;

export const Content = styled.div`
	margin: 0;
	width: 1000px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const RectangleCon = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 70px;
		height: 70px;
		margin-right: 1rem;
	}

	span {
        white-space: nowrap;
		font-size: var(--fontBig) !important;
	}
`;
