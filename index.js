function mostrarResultados(obj) {
  console.log(obj);
  const items = obj.items;
  const imgData = obj.includes.Asset;

  const templateEl = document.querySelector(".template").content;
  const contenedorEl = document.querySelector(".results");

  const imgEl = templateEl.querySelector(".img");
  const titleEl = templateEl.querySelector(".proyect-title");
  const descriptionEl = templateEl.querySelector(".proyect-description");
  const linkEl = templateEl.querySelector(".link");

  let contador = 0;
  while (contador < items.length) {
    imgEl.setAttribute("src", imgData[contador].fields.file.url);
    titleEl.textContent = items[contador].fields.titulo;
    descriptionEl.textContent = items[contador].fields.descripcion;
    linkEl.setAttribute("href", items[contador].fields.url);

    const clone = document.importNode(templateEl, true);
    contenedorEl.appendChild(clone);
    contador++;
  }
}

function main() {
  fetch(
    "https://cdn.contentful.com/spaces/xfz9lznsmed7/environments/master/entries?access_token=5qriaqQtppfoNJR67S_Qv2ZKGPR3xA456sGwZj23GPM"
  ).then((obj) => {
    obj.json().then((res) => {
      mostrarResultados(res);
    });
  });
}

main();
