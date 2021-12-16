let windowOpened;

function openImage(imageNumber)
{
    if (!imageNumber || parseInt(imageNumber) < 1 || parseInt(imageNumber) > 4)
        alert("Перевірте номер картинки")
    else
    {
        windowOpened = window.open(`./images/img-${imageNumber}.jpg`, `Image ${imageNumber}`, 'width=500')
    }
}

function closeImage() {
    if(windowOpened) {
        windowOpened.close()
    }
}