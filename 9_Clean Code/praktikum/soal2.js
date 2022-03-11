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
  berjalan(tingkatKecepatan) {
    const tambahKecepatan = (kecepatanBaru) => {
      return (this.kecepatanPerJam += kecepatanBaru);
    };
    return tambahKecepatan(tingkatKecepatan * 10);
  }
}

const mobilCepat = new Mobil();
mobilCepat.berjalan(3);
console.log(mobilCepat);

const mobilLamban = new Mobil();
mobilLamban.berjalan(1);
console.log(mobilLamban);
