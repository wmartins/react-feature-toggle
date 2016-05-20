# ReactJS Feature Toggle

This is a simple way to use [React
Contexts](https://facebook.github.io/react/docs/context.html) to build feature
toggle components.

You can check a running [demo](http://wmartins.github.io/react-feature-toggle/).

## Documentation

### &lt;FeatureToggleProvider&gt;

This is a wrapper to handle features.

```javascript
const features = {
    firstFeature: true,
    secondFeature: false
};

<FeatureToggleProvider features={features}>
</FeatureToggleProvider>
```

### &lt;FeatureToggle&gt;

This component will show a component if a feature is enabled.

```javascript
const features = {
    firstFeature: true,
    secondFeature: false
};

<FeatureToggleProvider features={features}>
    <div>
        <FeatureToggle feature="firstFeature">
            Hey, I am enabled!
        </FeatureToggle>
        <FeatureToggle>
            Well, I am not enabled :(
        </FeatureToggle>
    </div>
</FeatureToggleProvider>
```

## TODO

- Improve docs
- Improve demo website
- Publish it as NPM package
- Add tests
