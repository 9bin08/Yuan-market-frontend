import React, { ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log('errorType :', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Caught by ErrorBoundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>에러가 발생했습니다. 다시 시도 해주세요</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
