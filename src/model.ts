import { createStore, createEvent } from 'effector';
import { debug } from 'patronum';

export const buttonClicked = createEvent();

export const $counter = createStore(0);

$counter.on(buttonClicked, (counter) => counter + 2);

debug($counter);
