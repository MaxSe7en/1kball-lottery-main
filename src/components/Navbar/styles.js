import styled from "styled-components";
export const Wrapper = styled.nav`
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	height: 140px;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* background-color: blueviolet; */
	/* justify-content: space-around; */
    margin-bottom: 0px;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* max-width: var(--maxWidth); */
	padding: 0 20px;
	height: 60px;
	position: relative;

	/* margin: 0 auto; */

	background-color: #e5e5e5;
`;

export const NavList = styled.div`
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: space-around;

	a {
		/* color: var(--color-links); */
		text-decoration: none;
        border-right: 1px solid #9F98A7;

	}

	a:hover {
		/* color: var(--color-links-hover); */
		text-decoration: none;
	}
   
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
        background: #ffffff80;
        backdrop-filter: blur(10px);
	}
    li{
        padding: 20px 40px;
    }
    a:last-child{
        border: none;
    }
`;

export const Logo = styled.img`
	position: relative;
	top: 20px;
`;

export const RightContent = styled.div``;

export const SearchBar = styled.div`
	display: inline;
	margin-right: 40px;
	input {
		border: 1px solid grey;
		border-radius: 20px;
		background: #e5e5e5;
		width: 300px;
		padding: 10px;
	}

	button {
		background: transparent;
		border: none;
		padding: 10px;
	}
`;

export const FlagDiv = styled.div`
	display: inline;

	img {
		height: 20px;
	}
`;
export const FlagImg = styled.img`
	height: 30px;
	margin-right: 10px;
`;
export const FlagImgDropDown = styled.img`
	height: 30px;
`;

// const SignupForm = ({ className }) => (
//     <form className={className}>
//       <input className="input" />
//       <button className="button">Button</button>
//     </form>
//   );

//   const Form = styled(SignupForm)`
//     .input {
//       background-color: palegreen;
//     }

//     .button {
//       background-color: palevioletred;
//     }
//   `;
