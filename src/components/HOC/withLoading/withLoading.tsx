import React, { Component } from "react";
import LoadingSpiner from "../../LoadingSpiner";

interface WithLoadingProps {
  loading: boolean;
}

export const withLoading = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpiner /> : <Component {...(props as P)} />;
    }
  };
