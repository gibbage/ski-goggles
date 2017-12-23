import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { defaultTo } from 'ramda';

import { UserOptionsKey } from './types/Types';
import { options } from './options/reducers';
import App from './options/components/App';
import { getOptions, setOptions } from './chrome/LocalStorage';

const key: UserOptionsKey = 'skiGogglesOptions';

getOptions(key).then((optionsFromLocal) => {
    const localOptions = defaultTo(optionsFromLocal, undefined);
    const store = createStore(options, localOptions);

    store.subscribe(() => {
        const state = store.getState();
        if(state){
          setOptions(key, state).then(e => {});
        }
    });

    ReactDOM.render(
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>,
        document.getElementById('root')
    );
});