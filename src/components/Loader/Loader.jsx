import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.style';

export const Loader = () => {
  return (
    <LoaderWrap>
      <FallingLines
        color="#4fa94d"
        width="200"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderWrap>
  );
};
