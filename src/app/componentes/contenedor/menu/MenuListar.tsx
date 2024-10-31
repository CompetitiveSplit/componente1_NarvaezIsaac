export const MenuListar = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/21bta5XlNKwUHzVoPZtS33?utm_source=generator"
            width="300"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p style={{ marginTop: '10px', color: '#000000' }}>Indie</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/7xqnjENj7MqorPKxMy322D?utm_source=generator"
            width="300"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p style={{ marginTop: '10px', color: '#000000' }}>Reguetón Viejito</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/6xzA8HSyvnCi2YnaclF0S3?utm_source=generator&theme=0"
            width="300"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p style={{ marginTop: '10px', color: '#000000' }}>Black Metal</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/6lss6GKAEv3qbzSpduBKti?utm_source=generator"
            width="300"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p style={{ marginTop: '10px', color: '#000000' }}>Rock en Inglés</p>
        </div>
      </div>
    );
};
