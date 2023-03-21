import React from 'react';
import classes from './File.module.scss';

type FileState = object;

type FileProps = {
  label: string;
  name: string;
  accept: string;
};

export class File extends React.Component<FileProps, FileState> {
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FileProps) {
    super(props);
    this.fileInput = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label className={classes.label}>
        {this.props.label}:
        <input
          type="file"
          name={this.props.name}
          className={classes.input}
          ref={this.fileInput}
          accept={this.props.accept}
        />
      </label>
    );
  }
}

export default File;
