import { tambah } from "./helpes/tambah.js";
import { kurang } from "./helpes/kurang.js";
import { bagi } from "./helpes/bagi.js";
import { modulus } from "./helpes/modulus.js";
import { kali } from "./helpes/kali.js";

main();

function main() {
  let angka1 = 10;
  let angka2 = 2;
  let resultTambah = tambah(angka1, angka2);
  let resultKurang = kurang(angka1, angka2);
  let resultBagi = kali(angka1, angka2);
  let resultKali = bagi(angka1, angka2);
  let resultModulus = modulus(angka1, angka2);

  console.log(resultTambah);
  console.log(resultKurang);
  console.log(resultBagi);
  console.log(resultKali);
  console.log(resultModulus);
}
