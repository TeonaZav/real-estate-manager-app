export const base64Image = (file, callback) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      callback(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};
