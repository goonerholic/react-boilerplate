import { AxiosResponse, AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';

const prefix = 'sampleAsync';

const SAMPLE_REQUEST = `${prefix}/SAMPLE_REQUEST`;
const SAMPLE_SUCCESS = `${prefix}/SAMPLE_SUCCESS`;
const SAMPLE_FAILURE = `${prefix}/SAMPLE_FAILURE`;

const sampleAsyncActions = createAsyncAction(
  SAMPLE_REQUEST,
  SAMPLE_SUCCESS,
  SAMPLE_FAILURE,
)<string, AxiosResponse, AxiosError>();
