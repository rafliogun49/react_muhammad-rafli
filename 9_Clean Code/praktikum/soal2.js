class Kendaraan {
  constructor() {
    this.totalRoda = 0;
    this.kecepatanPerJam = 0;
  }
}

class Mobil extends Kendaraan {
  constructor() {
    super();
    this.totalRoda = 4;
  }

  berjalan(kecepatan) {
    return (this.kecepatanPerJam += kecepatan);
  }
}

const main = () => {
  const mobilCepat = new Mobil();
  mobilCepat.berjalan(30);
  console.log(mobilCepat);

  const mobilLamban = new Mobil();
  mobilLamban.berjalan(10);
  console.log(mobilLamban);
};
main();
