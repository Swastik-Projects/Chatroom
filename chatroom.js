var Username_Storage = sessionStorage.getItem("Username");
app = new ChatBox()
if (localStorage.getItem('name') == null) {
  app.home()
}
else {
  app.chat()
}