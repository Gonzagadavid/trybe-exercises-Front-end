export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_SUCESS  = 'REQUEST_CHARACTER_SUCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const actionRequest = (state) => ({ type: REQUEST_CHARACTER, state });

export const actionSucess = (state) => ({ type: REQUEST_CHARACTER_SUCESS, state });

export const actionError = (state) => ({ type: REQUEST_ERROR , state });
