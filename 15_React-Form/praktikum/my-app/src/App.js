import {useRef, useState} from "react";

function App() {
  const baseData = {
    nama: "",
    email: "",
    phoneNumber: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const baseError = {
    nama: "",
    email: "",
    phoneNumber: "",
  };

  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMessage, setErrorMessage] = useState(baseError);
  const regex = /^[A-Za-z ]*$/;
  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  const handleChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regex.test(value)) {
        setErrorMessage({
          ...errorMessage,
          nama: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          nama: "Nama lengkap harus berupa huruf",
        });
      }
    }
    if (name === "email") {
      if (emailPattern.test(value)) {
        setErrorMessage({
          ...errorMessage,
          email: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          email: "Format email tidak sesuai",
        });
      }
    }
    if (name === "phoneNumber") {
      // jumlah nomor 9-14
      if (data.phoneNumber.length > 7 && data.phoneNumber.length < 14) {
        setErrorMessage({
          ...errorMessage,
          phoneNumber: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          phoneNumber: "No handphone tidak sesuai",
        });
      }
    }

    if (name === "pendidikan") {
      if (target.checked) {
        setData({
          ...data,
          pendidikan: value,
        });
      }
    }

    console.log(data);
    console.log(errorMessage);
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage.nama && !errorMessage.email && !errorMessage.phoneNumber) {
      alert(`Data pendaftar "${data.nama}" berhasil diterima`);
    } else {
      alert("Data pendaftar tidak sesuai");
    }
  };

  const resetData = () => {
    setData(baseData);
    setErrorMessage(baseError);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>
          <form className="row gap-3" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="nama">Nama</label>
              <input
                type="text"
                class="form-control"
                id="nama"
                placeholder="Masukkan nama"
                name="nama"
                value={data.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="xxxxxx@gmail.com"
                name="email"
                required
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Nomor Telepon</label>
              <input
                type="number"
                class="form-control"
                id="phoneNumber"
                placeholder="08xxxxxxxxxxx"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pendidikan">
              <label>Latar Belakang Pendidikan</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="pendidikan"
                  id="it"
                  value="IT"
                  checked={data.pendidikan === "IT"}
                  onChange={handleChange}
                />
                <label class="form-check-label" for="it">
                  IT
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="pendidikan"
                  id="nonIt"
                  value="nonIT"
                  checked={data.pendidikan === "nonIT"}
                  onChange={handleChange}
                />
                <label class="form-check-label" for="nonIt">
                  Non IT
                </label>
              </div>
            </div>
            <div className="coding-class">
              <label for="codingClass">Kelas Coding yang Dipilih</label>
              <select id="codingClass" class="form-control" name="kelas" onChange={handleChange}>
                <option selected>Pilih kelas</option>
                <option value="golang">Coding Backend with Golang</option>
                <option value="react">Coding Frontend with ReactJS</option>
                <option value="fullstack">Fullstack Developer</option>
              </select>
            </div>
            <div class="form-group row">
              <label class="col-12" for="suratKesungguhan">
                Foto Surat Kesungguhan
              </label>
              <input
                type="file"
                class="form-control-file"
                id="suratKesungguhan"
                ref={suratKesungguhan}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Harapan Untuk Coding Bootcamp ini</label>
              <textarea
                class="form-control"
                name="harapan"
                id="exampleFormControlTextarea1"
                rows="3"
                value={data.harapan}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <p className="text-danger">{errorMessage.nama}</p>
              <p className="text-danger">{errorMessage.email}</p>
              <p className="text-danger">{errorMessage.phoneNumber}</p>
            </div>
            <button type="submit" class="btn btn-primary col-lg-1 col-md-2 col-sm-4">
              Submit
            </button>
            <button
              type="reset"
              class="btn btn-outline-danger col-lg-1 col-md-2 col-sm-4"
              onClick={resetData}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
