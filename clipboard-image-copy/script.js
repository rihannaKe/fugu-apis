async function loadBlob(fileName) {
    const fetched = await fetch(fileName);
    return await fetched.blob();
}

copy.onclick = async () => {
    try {
        const url = 'me.png';
        const blobInput = await loadBlob(url);
        const clipboardItemInput = new ClipboardItem({ 'image/png': blobInput });
        await navigator.clipboard.write([clipboardItemInput]);
        console.log('Image copied.');
    } catch (e) {
        console.log(e);
    }
};

paste.onclick = async () => {
    try {
        const clipboardItems = await navigator.clipboard.read();
        console.log(clipboardItems);
        const blobOutput = await clipboardItems[0].getType('image/png');
        document.getElementById('image-field').src =
            window.URL.createObjectURL(blobOutput);
        console.log('Image pasted.');
    } catch (e) {
        console.log('Failed to read clipboard');
    }
};