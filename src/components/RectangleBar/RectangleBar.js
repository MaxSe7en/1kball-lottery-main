import React from "react";
import { Wrapper, Content, RectangleCon } from "./styles";
import Tech from "../../images/n_250593_ms@2x.png";
import Tech2 from "../../images/n_250593_ms.png";
import Adjust from "../../images/adjustable_odds@2x.png";
import Adjust2 from "../../images/adjustable_odds.png";
import Stream from "../../images/av63fa1d6082bbbeb54d8@2x.png";
import Stream2 from "../../images/av63fa1d6082bbbeb54d8.png";

const RectangleBar = () => {
	return (
		<Wrapper>
			<Content>
				<RectangleCon>
					<img src={Tech} alt="Proprietary tech" srcSet={Tech2} />
					<span>Proprietary tech</span>
				</RectangleCon>
				<RectangleCon>
					<img
						src={Stream}
						style={{ width: "90px", height: "90px" }}
						alt="Continuous live stream"
						srcSet={Stream2}
					/>
					<span>Continuous live stream</span>
				</RectangleCon>
				<RectangleCon>
					<img src={Adjust} alt="Adjustable odds" srcSet={Adjust2} />
					<span>Adjustable odds</span>
				</RectangleCon>
			</Content>
		</Wrapper>
	);
};

export default RectangleBar;
