import React from 'react';
import {atom, useRecoilState} from 'recoil';
import Layout from '../components/Layout/index';

const counter = atom({
  key: 'myCounter',
  default: 0,
});

export default function Counter() {
  const [count, setCount] = useRecoilState(counter);
  const incrementByOne = () => setCount(count + 1);

  return (
    <Layout title="Counter">
        <div>
            Count: {count}
            <br />
            <button onClick={incrementByOne}>Increment</button>
        </div>
    </Layout>
  );
}