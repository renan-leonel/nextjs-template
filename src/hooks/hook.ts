import { useState } from 'react';

export function useHook() {
	const [state, setState] = useState(0);
	return {
		state,
		setState,
	};
}
