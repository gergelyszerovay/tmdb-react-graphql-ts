import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);