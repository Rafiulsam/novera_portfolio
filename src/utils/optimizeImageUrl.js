export function optimizeImageUrl(url, type = 'preview') {
    const baseUrl = url.split('?')[0];
  
    const transformations = {
      preview: 'tr=w-400,q-60,fo-auto',
      zoom: '',
    };
  
    return `${baseUrl}?${transformations[type]}`;
  }  