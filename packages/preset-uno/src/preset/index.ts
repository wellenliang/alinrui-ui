import { Preset } from '@unocss/core';
import { DEFAULT_COLOR, DEFAULT_PRESET_NAME } from '../constants';
import { Theme } from '@unocss/preset-uno';
export function presetAlinrui(
	name: string = DEFAULT_PRESET_NAME,
	themeColor: string = DEFAULT_COLOR,
	theme: Theme
) {
	return {
		name
	} as Preset<Theme>;
}
