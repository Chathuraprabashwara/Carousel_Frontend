import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import getStyles from './getStyles';

export default function Carousel(props) {
	const [data, setData] = useState([]);
	const [index, setIndex] = useState(0);
	const [rightbtn, setRightbtn] = useState(props.Slides === "1" ? false : true);
	const [leftbtn, setLefttbtn] = useState(
		props.Slides === "1" ? false : props.Infinite !== 'true' ? false : true
	);
	const [opercity, setOpercity] = useState(1);
	const sample = data[index];
	const style = getStyles(opercity);

	const handleNext = () => {
		setOpercity(0.2);
		setTimeout(() => {
			setOpercity(1);
			if (index < props.Slides - 1) {
				setIndex(index + 1);
				setLefttbtn(true);
			} else {
				props.Infinite === 'true' ? setIndex(0) : setRightbtn(false);
			}

			if (index === props.Slides - 2 && props.Infinite !== 'true') {
				setRightbtn(false);
			}
		}, 700);
	};

	const handlePrev = () => {
		setOpercity(0.2);
		setTimeout(() => {
			setOpercity(1);
			if (index > 0) {
				setIndex(index - 1);
				setRightbtn(true);
			} else {
				props.Infinite === 'true'
					? setIndex(props.Slides - 1)
					: setLefttbtn(false);
			}
			if (index === 1 && props.Infinite !== 'true') {
				setLefttbtn(false);
			}
		}, 700);
	};

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_BASE_URL}/api/carousel`, {
				params: {
					slides: props.Slides,
				},
			})
			.then((response) => {
				setData(response.data.slides);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [props.Slides]);

	return (
		<div style={style.container}>
			<div style={style.slide}>
				<img
					src={sample && sample.image}
					style={style.image}
          alt={sample && sample.title}
				/>
				<h2 style={style.title}>{sample && sample.title}</h2>
				<h3 style={style.subTitle}>{sample && sample.subTitle}</h3>
				<div style={style.iconContainer}>
					{leftbtn ? (
						<FontAwesomeIcon
							style={style.iconLeft}
							size="2xl"
							icon={faAngleLeft}
							onClick={handlePrev}
						/>
					) : (
						<> </>
					)}
					{rightbtn ? (
						<FontAwesomeIcon
							style={style.iconRight}
							size="2xl"
							icon={faAngleRight}
							onClick={handleNext}
						/>
					) : (
						<> </>
					)}
				</div>
			</div>
		</div>
	);
}
