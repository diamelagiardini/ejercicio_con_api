fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    mostrarEnHTML(data);
  });

const mostrarEnHTML = (data) => {
  const tabla = document.querySelector("#tabla");
  const html = data.reduce(
    (acc, curr) => {
      return (
        acc +
        `
        <tr>
            <td>${curr.fullname}</td>
            <td>${curr.email}</td>
            <td>${curr.address}</td>
            <td>${curr.phone}</td>
            <td><button><i class="fas fa-pen"></i>
            </button></td>
        </tr>`
      );
    },
    `<tr>
    <th>Nombre</th>
    <th>Email</th>
    <th>Direccion</th>
    <th>Telefono</th>
    <th>Acciones</th>
</tr>`
  );

  tabla.innerHTML = html;
};

const formulario = document.querySelector("#formulario");
const botonAgregarUsuario = document.querySelector("#boton-agregar-usurio");

botonAgregarUsuario.onclick = () => {
  formulario.classList.toggle("mostrar");
  tabla.classList.toggle("ocultar");
};

inputNombre = document.querySelector("#nombre");
inputEmail = document.querySelector("#email");
inputDireccion = document.querySelector("#direccion");
inputTelefono = document.querySelector("#telefono");

const nombre = inputNombre.value;
const email = inputEmail.value;
const direccion = inputDireccion.value;
const telefono = inputTelefono.value;

const agregar = document.querySelector("#agregar");

agregar.onclick = () => {
  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
    method: "POST",
    body: JSON.stringify({
      firsname: `"${nombre}"`,
      email: `"${email}"`,
      address: `"${direccion}"`,
      phone: `"${telefono}"`,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      mostrarEnHTML(data)
    });
};
