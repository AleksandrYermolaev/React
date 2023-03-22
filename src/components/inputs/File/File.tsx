import React from 'react';
import classes from './File.module.scss';

type FileState = object;

type FileProps = {
  label: string;
  name: string;
  accept: string;
  getValue: (field: string, value: string | undefined) => void;
  errMessage: string;
};

export class File extends React.Component<FileProps, FileState> {
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FileProps) {
    super(props);
    this.fileInput = React.createRef<HTMLInputElement>();
  }

  handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const [file] = event.target.files;
      const url = file ? URL.createObjectURL(file) : '';
      console.log(file);

      this.props.getValue(this.props.name, url);
    }
  };

  render() {
    return (
      <label className={classes.label}>
        {this.props.label}:
        <div>
          <input
            type="file"
            name={this.props.name}
            className={classes.input}
            ref={this.fileInput}
            accept={this.props.accept}
            onChange={this.handleFileInput}
          />
          <p className={classes.warning}>{this.props.errMessage}</p>
        </div>
      </label>
    );
  }
}

export default File;
