import React from 'react';

class NotFound extends React.Component {
  render(): React.ReactNode {
    return <h1 style={{ fontSize: '2rem', marginTop: '5rem' }}>404. Requested page not found</h1>;
  }
}

export default NotFound;
