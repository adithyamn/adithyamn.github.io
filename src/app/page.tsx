export default function Home() {
  return (
    <main style={{ 
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: '#4ade80', 
          borderRadius: '50%' 
        }}></div>
        <span style={{ color: '#94a3b8' }}>Online.</span>
      </div>

      <h1 style={{ 
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: 'white'
      }}>
        Hey, I'm Adithya Mylavarapu Naga
      </h1>

      <h2 className="gradient-text" style={{ 
        fontSize: '1.5rem',
        margin: '0',
        marginTop: '0.5rem'
      }}>
        Robotics Engineer.
      </h2>
    </main>
  );
} 