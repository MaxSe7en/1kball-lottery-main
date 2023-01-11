import React from "react";
import { Content, Wrapper, Flex } from "./styles";
const BlurCardImg = ({
	headone,
	headtwo,
	headthree,
	headfour,
	headfive,
	headsix,
	headseven,
	imgone,
	imgtwo,
	imgthree,
	imgfour,
	paraone,
	paratwo,
}) => {
	// const contents = headone;

	// const arr = contents.trim().split(",");
	// {arr.map((e) => (
	// 	<h1>{e}</h1>
	// ))}
	return (
		<Wrapper>
			<Content>
				<p>{headone}</p>
				<h1>{headtwo}</h1>
				<Flex>
					<div>
						<img src={imgone} alt={headthree} srcSet="" />
						<h2>{headthree}</h2>
					</div>
					<div>
						<img src={imgtwo} alt={headfour} srcSet="" />
						<h2>{headfour}</h2>
					</div>
					<div>
						<img src={imgthree} alt={headfive} srcSet="" />
						<h2>{headfive}</h2>
					</div>
					{imgfour !== undefined ?(
						<div>
						<img src={imgfour} alt={headsix} srcSet="" />
						<h2>{headsix}</h2>
					</div>
					) :<noscript></noscript> } 
					
				</Flex>
				<p>{paraone}</p>
				<p>{paratwo}</p>
			</Content>
		</Wrapper>
	);
};

export default BlurCardImg;
