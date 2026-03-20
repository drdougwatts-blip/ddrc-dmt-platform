import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '2rem auto' }}>
          <h1 style={{ color: '#CC3333', fontSize: '1.5rem' }}>Something went wrong</h1>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>The application encountered an error. Please try refreshing the page.</p>
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', marginTop: '1rem', overflow: 'auto', fontSize: '0.85rem', color: '#333' }}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', background: '#1B3A5C', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
          >
            Refresh page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
