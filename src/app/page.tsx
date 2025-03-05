"use client";
import Card from './components/Card';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a192f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div style={{
        width: '600px',
        backgroundColor: '#112240',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Card />
      </div>

      <div style={{
        width: '600px',
        backgroundColor: '#112240',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Card />
      </div>
    </div>
  );
} 