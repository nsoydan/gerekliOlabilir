const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com/data', { signal })
  .then(response => response.json())
  .then(data => {
    // İşleme gelen verileri kullan
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('İstek iptal edildi.');
    } else {
      console.error('Bir hata oluştu:', error);
    }
  });

// İsteği iptal etmek için:
controller.abort();
