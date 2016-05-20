import React from 'react';

class FeatureToggleProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            features: this.props.features
        };
    }

    render() {
        return this.props.children;
    }
}

FeatureToggleProvider.contextTypes = {
    features: React.PropTypes.object
};

FeatureToggleProvider.childContextTypes = FeatureToggleProvider.contextTypes;

FeatureToggleProvider.propTypes = {
};

export default FeatureToggleProvider;
