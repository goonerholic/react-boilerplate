import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import Example from './../components/Example';
import { sampleAction } from './../modules/sample';

export default function ExampleContainer(): ReactElement {
  const dispatch = useDispatch();
  const { value } = useSelector(({ sample }: RootState) => ({
    value: sample.value,
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sampleAction(e.target.value));
  };

  return <Example value={value} onChange={onChange} />;
}
