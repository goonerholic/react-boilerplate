import { createAction, createReducer, ActionType } from 'typesafe-actions';

interface SampleState {
  value: string;
}

const prefix = 'sample';

const SAMPLE_ACTION = `${prefix}/SAMPLE_ACTION`;

export const sampleAction = createAction(SAMPLE_ACTION, (arg: string) => arg)();

const initialState: SampleState = {
  value: '',
};

const sample = createReducer<SampleState, ActionType<typeof sampleAction>>(
  initialState,
  {
    [SAMPLE_ACTION]: (state, action) => ({
      ...state,
      value: action.payload,
    }),
  },
);

export default sample;
