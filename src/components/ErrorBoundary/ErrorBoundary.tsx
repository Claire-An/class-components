import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  theme: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      theme: localStorage.getItem('currentTheme') || 'light',
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('getDerivedStateFromError caught an error:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className={[
            this.state.theme,
            this.state.theme === 'dark' ? 'errorDivDark' : '',
          ].join(' ')}
        >
          Что-то пошло не так...
          <button onClick={() => window.location.reload()}>Вернуться</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
