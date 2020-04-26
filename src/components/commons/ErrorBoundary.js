import React from "react";
import { logErrorToMyService } from "../../api/index";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      info: "",
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
    this.setState({
      ...this.state,
      error,
      info,
    });
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="row text-danger text-center">
          <div className="col-12 m-2 p-2">
            <h4>oops! something went wrong!</h4>;<p>{this.state.error}</p>
            <p>{this.state.info}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
