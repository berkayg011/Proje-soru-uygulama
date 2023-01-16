function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Soru(
    "2-Aşağıdakilerden hangisi MS Word'un varsayılan dosya formatıdır?",
    { a: ".docx", b: ".xsls", c: ".txt", d: ".pdf" },
    "a"
  ),
  new Soru("3-Hangisi javascript programlama dilini kullanmaz", { a: "Angular", b: "React", c: "Vuejs", d: "Asp.net" }, "d"),
  new Soru("4-Hangisi frontend kapsamında değerlendirilmez", { a: "Css", b: "Html", c: "Javascript", d: "Sql" }, "d"),
  new Soru("5-Hangisi backend kapsamında değerlendirilir", { a: "Typescript", b: "Node.js", c: "Angular", d: "React" }, "b"),
];
