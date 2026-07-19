tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B1F3A',
          800: '#122A4C',
          700: '#1A3A66'
        },
        brand: {
          DEFAULT: '#1D6FEB',
          light: '#5B93F2',
          dark: '#144FB0'
        },
        sky: {
          light: '#DCEBFF',
          mid: '#7DC3FA'
        },
        mist: '#F4F8FC',
        sun: '#F5A623'
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(11, 31, 58, 0.25)',
        card: '0 10px 30px -12px rgba(11, 31, 58, 0.18)'
      },
      borderRadius: {
        xl2: '1.75rem'
      }
    }
  }
};
