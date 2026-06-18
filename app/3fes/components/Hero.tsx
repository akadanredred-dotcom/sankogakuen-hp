'use client';

export default function Hero() {
  return (
    <div style={{
      position: 'relative',
      height: '60vh',
      width: '100%',
      backgroundColor: '#171717',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("/img/sannfessiryou.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <p style={{ fontSize: '35px', fontWeight: 'bold', color: '#e50012', letterSpacing: '0.1em', margin: '0 0 12px 0' }}>
        2026
      </p>
      <br />
      <h1 style={{ fontSize: '60px', fontWeight: '900', color: '#e50012', margin: '0' }}>
        三幸学園フェスティバル
      </h1>

    </div>
  );
}