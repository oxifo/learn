class system {
  constructor(b){
    this.b =document.body;
  }
  setting() {
    let meta = document.createElement("meta");
    let head = document.querySelector("head");
    meta.name = "viewport";
    meta.content = "width=device-width,initial-scale=1.0";
    head.appendChild(meta);
  }
  Toast(str, timer) {
    let toast = document.querySelector("Toast");
    toast.textContent = str;
    toast.style.bottom = "0px";
    toast.style.display = 'block';
    setTimeout(function() {
      toast.style.bottom = "-300px";
    }, timer).then(function() {
      setTimeout(function() {
        toast.style.display = "none";
      }, 500)
    });
  }
  darkMode(on){
    if (typeof on == "boolean" || on =="dark") {
      this.b.style.background="#4D4D4D";
      this.b.style.color ="#ffffff";
      return false;
    }
  }
}
let settings = new system();
settings.setting();
