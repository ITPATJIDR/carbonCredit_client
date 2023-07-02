import {useState, useEffect} from "react"


const letsponsive = ({children, onWidth}) => {
	const [windowWidth, setWindowWidth] = useState(null);
	const [windowHeight, setWindowHeight] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
		};

		if (typeof window !== 'undefined') {
			window.addEventListener("resize", handleResize);

			// Initial window size
			handleResize();

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	const checkSize = (onWidth) => {
		if(windowWidth < Number(onWidth)){
			return false
		}else{
			return true
		}
	}

	return (
		<div>
			{checkSize(onWidth) ?
				<div>
					{children}
				</div>
				: null
			}
		</div>
	)
}

export default letsponsive

