body {
  background-color: #eaeef3 !important;
  height: 100vh;
  margin: 0;
}
.menu-header {
  color: #fff !important;
}
.header-logo {
  flex-direction: row !important;
}
.sidebar {
  background-color: #222c3c;
  min-width: 250px;
  max-width: 250px;
  min-height: calc(100vh - 56px);
  transition: all 0.3s;
}
.sidebar ul li a {
  display: block;
  padding: 0.75rem 1rem;
  color: #c7cace;
  text-decoration: none;
}
.sidebar ul li a:hover,
.sidebar ul .active a {
  color: #ecedee;
  background-color: #354358;
}
.sidebar ul ul a {
  padding-left: 2.5rem;
  background-color: #1e2835;
}
/*Seletor utilizado para ativar o botão ocultar menu em PC*/
.sidebar.toggled {
  margin-left: -250px;
}

.sidebar [data-toggle='collapse'] {
  position: relative;
}
.sidebar [data-toggle='collapse']:before {
  content: '\f0d7';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  right: 1rem;
}
.sidebar [aria-expanded='true'] {
  background-color: #19222d;
}
.sidebar [aria-expanded='true']:before {
  content: '\f0d8';
}
.content {
  width: 100%;
}
.titulo {
  font-size: 2rem !important;
}

.img-perfil {
  position: relative;
  display: inline-block;
}
.img-perfil:hover .edit {
  display: block;
}
.edit {
  padding-top: 7px;
  padding-right: 7px;
  position: absolute;
  right: 0;
  top: 0;
  display: none;
}
.cursor-pointer {
  cursor: pointer;
}

.items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.items-price {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

@media (max-width: 768px) {
  .sidebar {
    margin-left: -250px;
  }
  .sidebar.toggled {
    margin-left: 0px;
  }
}
