import { DetailedHTMLProps, ImgHTMLAttributes } from "react";



const images = require.context('img', true);


export const Image = ({src, ...props} : DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> )  => (
	<img {...props} src={images(src)}  />
);