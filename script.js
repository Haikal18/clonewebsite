document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("buttonDaftar")
    .addEventListener("click", function () {
      var popUpContent = ` 
            <div id="popup" class="popup"> 
                <div class="popup-content"> 
                    <h2 style="margin-top: 0px;">Daftar Diri UPN Veteran Jakarta <img src="logoupn.png" alt="Logo UPNVJ" height="30px"></h2> 
                    <hr> 
                    <p style="font-size: larger;">Mahasiswa Sistem Informasi Ilmu Komputer</p> 
                    <p>Nama &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: Muhammad Haikal Bintang</p> 
                    <p>Nim &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: 2210512020</p> 
                    <p>Program Studi  : Sistem Informasi</p> 
                    <br>
                    <p style="text-align: center;">" Semoga Sistem ini berguna " - Muhammad Haikal Bintang</p> 
                    <hr> 
                    <button id="closeButton">Close</button> 
                </div> 
            </div> 
        `;
      document.body.insertAdjacentHTML("beforeend", popUpContent);

      document
        .getElementById("closeButton")
        .addEventListener("click", closePopup);
    });
});

function closePopup() {
  var popup = document.getElementById("popup");
  popup.parentNode.removeChild(popup);
}