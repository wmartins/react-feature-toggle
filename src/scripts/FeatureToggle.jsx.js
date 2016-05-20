import React from 'react';

class FeatureToggle extends React.Component {
    isFeatureEnabled() {
        return this.context.features[this.props.feature];
    }

    render() {
        if(this.isFeatureEnabled()) {
            return this.props.children;
        }

        return null;
    }
}

FeatureToggle.contextTypes = {
    features: React.PropTypes.object
};

export default FeatureToggle;
