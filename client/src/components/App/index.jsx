import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from './App';

class ConnectedApp extends React.Component {
    state = {}

    componentDidUpdate(prevProps) {
      const { location } = this.props;
      if (location !== prevProps.location) {
        this.onRouterChanged();
      }
    }

    onRouterChanged=() => {
      window.scrollTo(0, 0);
    }

    render() {
      return (
        <App />
      );
    }
}

ConnectedApp.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default withRouter(ConnectedApp);
