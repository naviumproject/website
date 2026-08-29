const Page = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0d0b09',
      padding: '24px'
    }}>
      <div style={{
        width: 'min(98vw, 1500px)',
        minHeight: '820px',
        background: 'rgba(14, 11, 10, 0.94)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '18px 18px 12px 12px',
        overflow: 'hidden',
        boxShadow: '0 30px 70px rgba(0,0,0,0.46)'
      }}>
        <div style={{
          height: '58px',
          background: 'linear-gradient(180deg, #1a1614, #120f0d)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 18px 0 16px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 14px',
            borderRadius: '12px 12px 0 0',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none',
            fontWeight: 700,
            fontSize: '16px',
            color: '#f2efe7'
          }}>
            <img
              src="/navium_icon.png"
              alt="navium icon"
              style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span>pissandshittium</span>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', display: 'inline-block', background: '#f06e6e' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', display: 'inline-block', background: '#f0d158' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', display: 'inline-block', background: '#75d07c' }} />
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          background: 'linear-gradient(180deg, #241f1d, #1f1c1a)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '10px 16px 12px',
          color: 'rgba(255,255,255,0.8)'
        }}>
          <div style={{ display: 'flex', gap: '12px', fontSize: '18px' }}>
            <span>←</span>
            <span>→</span>
            <span>⟳</span>
          </div>

          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '999px',
            padding: '9px 16px',
            fontSize: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🔒</span>
              <span>pissandshittium.org</span>
            </div>
            <span>⋮</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.2fr', minHeight: '720px' }}>
          <section style={{
            position: 'relative',
            padding: '22px 25px 18px',
            background: 'linear-gradient(180deg, #31251e 0%, #201915 100%)',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(130deg, rgba(233, 212, 123, 0.14), transparent 40%), radial-gradient(circle at 18% 44%, rgba(255,255,255,0.12), transparent 26%), radial-gradient(circle at 62% 22%, rgba(255,255,255,0.06), transparent 30%)'
            }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <img src="/hero/twitter.png" alt="preview 1" style={{ width: '118px', height: '84px', objectFit: 'cover', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 12px 24px rgba(0,0,0,0.22)' }} />
              <img src="/main.png" alt="preview 2" style={{ width: '118px', height: '84px', objectFit: 'cover', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 12px 24px rgba(0,0,0,0.22)' }} />
            </div>

            <div style={{
              position: 'relative', zIndex: 1,
              marginTop: '12px',
              fontWeight: 900,
              letterSpacing: '-0.08em',
              fontSize: 'clamp(4rem, 6vw, 7.2rem)',
              lineHeight: 0.8,
              color: '#d9c86d',
              textShadow: '0 2px 0 rgba(0,0,0,0.18)'
            }}>
              <span style={{ display: 'block' }}>dshittium</span>
            </div>

            <div style={{
              position: 'relative', zIndex: 1,
              display: 'inline-block',
              marginTop: '16px',
              padding: '14px 22px',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.08)',
              color: '#f2efe7',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 1.6vw, 1.5rem)'
            }}>
              Download for Linux
            </div>
          </section>

          <section style={{
            position: 'relative',
            background: '#17110e',
            padding: '26px 22px 18px'
          }}>
            <div style={{
              width: 'min(100%, 860px)',
              margin: '0 auto',
              background: 'rgba(31, 24, 20, 0.78)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '18px 18px 0 0',
              padding: '26px 22px 0'
            }}>
              <h1 style={{
                margin: 0,
                fontSize: 'clamp(2.4rem, 4vw, 5.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.07em',
                fontWeight: 900,
                color: '#f2efe7'
              }}>
                monochromatic
              </h1>

              <p style={{
                margin: '10px 0 22px',
                fontSize: 'clamp(1.4rem, 2vw, 2.9rem)',
                color: 'rgba(255,255,255,0.88)'
              }}>
                the browser sdjasiod
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '270px',
                padding: '16px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                fontSize: 'clamp(1.1rem, 1.5vw, 1.6rem)',
                fontWeight: 700,
                color: '#f2efe7'
              }}>
                download for microsoft windows
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', padding: '22px 0 20px' }}>
                <div style={{
                  width: 'min(35vw, 420px)',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.06)',
                  border: '18px solid rgba(255,255,255,0.12)',
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  <img src="/navium_icon.png" alt="navium icon" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>

            <aside style={{
              position: 'absolute',
              right: '20px',
              top: '118px',
              width: 'min(360px, 32vw)',
              background: 'rgba(233, 228, 218, 0.96)',
              color: '#161515',
              borderRadius: '12px',
              padding: '16px 18px 18px',
              boxShadow: '0 18px 20px rgba(0,0,0,0.2)',
              border: '1px solid rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3f90ff', boxShadow: 'inset 0 0 0 3px rgba(255,255,255,0.55)' }} />
                <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2vw, 2.2rem)', letterSpacing: '-0.05em' }}>Chromium</h2>
              </div>

              <ul style={{ listStyle: 'none', margin: '0 0 16px', padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li><a href="#" style={{ textDecoration: 'none', color: '#0e6ef5', fontSize: '1rem', fontWeight: 700 }}>Home</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(22,21,21,0.8)', fontSize: '1rem' }}>Projects</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(22,21,21,0.8)', fontSize: '1rem' }}>Quick links</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(22,21,21,0.8)', fontSize: '1rem' }}>Docs</a></li>
              </ul>

              <p style={{ margin: 0, color: 'rgba(22,21,21,0.83)', lineHeight: 1.55, fontSize: '1rem' }}>
                Chromium is an open-source project built for speed, stability, and a safer web experience for everyone.
              </p>

              <a href="#" style={{ display: 'inline-block', marginTop: '18px', textDecoration: 'none', padding: '10px 16px', borderRadius: '8px', background: '#1a7df5', color: 'white', fontWeight: 700 }}>
                Edit this page
              </a>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Page;
