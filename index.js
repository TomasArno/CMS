function mostrarResultados(obj) {
  const templateEl = document.querySelector(".template").content;
  const contenedorEl = document.querySelector(".results");

  const imgEl = templateEl.querySelector(".img");
  const titleEl = templateEl.querySelector(".proyect-title");
  const descriptionEl = templateEl.querySelector(".proyect-description");
  const linkEl = templateEl.querySelector(".see-more");

  // imgEl.setAttribute("src", imgData[contador].fields.file.url);
  titleEl.textContent = obj.titulo;
  descriptionEl.textContent = obj.descripcion;
  linkEl.setAttribute("href", obj.url);

  const clone = document.importNode(templateEl, true);
  contenedorEl.appendChild(clone);
}

function parseador() {
  return fetch(
    "https://cdn.contentful.com/spaces/xfz9lznsmed7/environments/master/entries?access_token=5qriaqQtppfoNJR67S_Qv2ZKGPR3xA456sGwZj23GPM"
  )
    .then((obj) => {
      return obj.json();
    })
    .then((data) => {
      const fieldsColl = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
        };
      });
      return fieldsColl;
    });
}
function main() {
  parseador().then((items) => {
    for (const item of items) {
      mostrarResultados(item);
    }
  });
}

main();
