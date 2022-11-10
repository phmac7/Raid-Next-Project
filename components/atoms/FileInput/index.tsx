import React, { FC } from 'react';
import { Camera } from 'phosphor-react';

const FileInput: FC = () => {
  return (
    <div>
      <Camera />
      <label htmlFor="file">Photo</label>
      <input id="file" type="file" />
    </div>
  );
};

export default FileInput;
