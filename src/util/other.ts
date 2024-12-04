export const isImageData = (data: any) => typeof data === 'string' && data.startsWith('data:image/');

export const downloadBlob = (name: string, blob: Blob, type: string) => {
    const link = document.createElement('a');

    link.download = name;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = [type, link.download, link.href].join(':');

    const downloadEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(downloadEvent);
    link.remove();
};