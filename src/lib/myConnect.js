import React, { Component } from "react";
import { store } from "../store/configureStore";
import CacheMap from "./CacheMap";
import isEqual from "lodash/isEqual";

const mergeProps = (props, stateToProps, dipsatchToProps) => ({
  ...props,
  ...stateToProps,
  ...dipsatchToProps
});

const memoize = fn => {
  let cache = new CacheMap();
  return (...args) => {
    if (!cache.has({ args })) {
      cache.set({ args }, fn(...args));
    }
    //console.log(cache.cache, "cache");
    return cache.get({ args });
  };
};

export const myConnect = (
  mapStateToProps,
  mapDispatchToProps
) => WrappedComponent =>
  class extends Component {
    storeProps = undefined;
    constructor(...args) {
      super(...args);
      this.mapDispatchToPropsMemoized = mapDispatchToProps(store.dispatch);
      this.handleChange.bind(this)();
    }
    render() {
      const memoizedProps = mergeProps(
        this.props,
        this.storeProps,
        this.mapDispatchToPropsMemoized
      );
      return <WrappedComponent {...memoizedProps} />;
    }
    componentDidMount() {
      this.unsubscribe = store.subscribe(this.handleChange.bind(this));
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    handleChange() {
      const nextStoreProps = mapStateToProps(store.getState(), this.props);
      if (isEqual(this.storeProps, nextStoreProps)) return;
      this.storeProps = nextStoreProps;
      this.forceUpdate();
    }
  };
