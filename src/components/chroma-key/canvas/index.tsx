// React
import { FC, useRef } from "react";
// Types
import { IChromaConfigs } from "interfaces/chroma-key";
// Hooks
import { useColorControler } from "hooks/chroma-key";
// Styles
import "./styles.less";

interface ICanvas {
	chromaConfig: IChromaConfigs;
}

const Canvas: FC<ICanvas> = ({ chromaConfig }) => {
	/** Definitions */
	const { chromaColor } = chromaConfig;

	/** Refs DOM elements */
	const canvas = useRef(null);
	const video = useRef(null);

	/** Handlers */
	const handleVideo = useColorControler(canvas, video, chromaColor);

	return (
		<div className="canvas">
			{true ? (
				<>
					<canvas ref={canvas}></canvas>
					<video onLoadedData={handleVideo} ref={video} autoPlay></video>
				</>
			) : (
				<span>esperando permisos...</span>
			)}
		</div>
	);
};

export default Canvas;
