import { useCallback, useState } from "react";

interface UseHover {
	isHovered: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const useHover = (): UseHover => {
	const [isHovered, isHoveredSet] = useState(false);
	const onMouseEnter = useCallback(() => isHoveredSet(true), [isHoveredSet]);
	const onMouseLeave = useCallback(() => isHoveredSet(false), [isHoveredSet]);

	return {
		isHovered,
		onMouseEnter,
		onMouseLeave,
	};
};
