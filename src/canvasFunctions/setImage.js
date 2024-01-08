const setImage = (context, size, file) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      context.drawImage(img, 0, 0, size, size);
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
};

export const handleSetImage = (e, canvasRef, size) => {
  const file = e.target.files[0];
  if (file) {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setImage(context, size, file);
  }
};
