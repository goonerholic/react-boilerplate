import React, { ReactElement } from 'react';
import './Example.scss';

interface ExampleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Example({
  value,
  onChange,
}: ExampleProps): ReactElement {
  return (
    <div className="Example">
      <h1>Typescript-React-Boilerplate</h1>
      <p>
        This is a boilerplate for React project written in Typescript without
        using CRA
      </p>
      <input
        type="text"
        value={value}
        placeholder="Type something"
        onChange={onChange}
      />
    </div>
  );
}
