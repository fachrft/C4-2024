// humberger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// modal box
const globalWarming1 = document.querySelector(".globalWarming1");
const globalWarming2 = document.querySelector(".globalWarming2");
const globalWarming3 = document.querySelector(".globalWarming3");

const showGw1 = document.querySelector(".show-gw-1");
const showGw2 = document.querySelector(".show-gw-2");
const showGw3 = document.querySelector(".show-gw-3");

globalWarming1.addEventListener("click", () => {
    showGw1.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";
    globalWarming1.classList.remove("bergerak");

    const close = document.querySelector(".close");
    showGw1.addEventListener("click", () => {
        showGw1.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    close.addEventListener("click", () => {
        showGw1.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});

globalWarming2.addEventListener("click", () => {
    showGw2.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    const close = document.querySelector(".close");
    showGw2.addEventListener("click", () => {
        showGw2.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    close.addEventListener("click", () => {
        showGw2.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
globalWarming3.addEventListener("click", () => {
    showGw3.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";
    globalWarming3.classList.remove("bergerak");

    const close = document.querySelector(".close");
    showGw3.addEventListener("click", () => {
        showGw3.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    close.addEventListener("click", () => {
        showGw3.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});

const suhuUdara1 = document.querySelector(".suhu-udara1");
const suhuUdara2 = document.querySelector(".suhu-udara2");
const suhuUdara3 = document.querySelector(".suhu-udara3");

const showSu1 = document.querySelector(".show-su-1");
const showSu2 = document.querySelector(".show-su-2");
const showSu3 = document.querySelector(".show-su-3");

suhuUdara1.addEventListener("click", () => {
    showSu1.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";
    suhuUdara1.classList.remove("bergerak");

    const close = document.querySelector(".close");
    showSu1.addEventListener("click", () => {
        showSu1.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    close.addEventListener("click", () => {
        showSu1.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
suhuUdara2.addEventListener("click", () => {
    showSu2.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    const close = document.querySelector(".close");

    showSu2.addEventListener("click", () => {
        showSu2.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    close.addEventListener("click", () => {
        showSu2.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: hidden;";
    });
});
suhuUdara3.addEventListener("click", () => {
    showSu3.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";
    suhuUdara3.classList.remove("bergerak");

    const close = document.querySelector(".close");
    showSu3.addEventListener("click", () => {
        showSu3.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    close.addEventListener("click", () => {
        showSu3.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
});

AOS.init({
    once: true,
});

function toggleGordeng(isInit = false) {
    if (isInit) {
        document.querySelector("body").style = "overflow-x: hidden;";
        setTimeout(() => {
            document.querySelector("body").style = "overflow-x: auto;";
        }, 3500);
    }
}
toggleGordeng(true);

//open penjelasan
const button = document.querySelector(".button-open-close");
const isiButton = document.querySelector(".isi-button");
const containerPenjelasan = document.querySelector(".container-penjelasan");

button.addEventListener("click", () => {
    containerPenjelasan.classList.toggle("open-penjelasan");
    if (containerPenjelasan.classList.contains("open-penjelasan")) {
        isiButton.innerHTML = "Close";
    } else {
        isiButton.innerHTML = "Lihat Penjelasannya";
    }
});

// pop up penjelasan
const ramahPengguna = document.querySelector(".button-ramah-pengguna");
const aksesibilitas = document.querySelector(".button-aksesibilitas");
const penyesuaian = document.querySelector(".button-penyesuaian");
const pelacakan = document.querySelector(".button-pelacakan");
const feedback = document.querySelector(".button-feedback");
const integrasi = document.querySelector(".button-integrasi");

const showP1 = document.querySelector(".show-prototype-1");
const showP2 = document.querySelector(".show-prototype-2");
const showP3 = document.querySelector(".show-prototype-3");
const showP4 = document.querySelector(".show-prototype-4");
const showP5 = document.querySelector(".show-prototype-5");
const showP6 = document.querySelector(".show-prototype-6");

// show 1
ramahPengguna.addEventListener("click", () => {
    const close = document.querySelector(".close");
    showP1.classList.remove("hidden");

    close.addEventListener("click", () => {
        showP1.classList.add("hidden");
    });

    showP1.addEventListener("click", () => {
        showP1.classList.add("hidden");
    });
});
aksesibilitas.addEventListener("click", () => {
    const close = document.querySelector(".close");
    showP2.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    close.addEventListener("click", () => {
        showP2.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    showP2.addEventListener("click", () => {
        showP2.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
penyesuaian.addEventListener("click", () => {
    const close = document.querySelector(".close");
    showP3.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    close.addEventListener("click", () => {
        showP3.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    showP3.addEventListener("click", () => {
        showP3.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
pelacakan.addEventListener("click", () => {
    const close = document.querySelector(".close");
    showP4.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    close.addEventListener("click", () => {
        showP4.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    showP4.addEventListener("click", () => {
        showP4.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
feedback.addEventListener("click", () => {
    const close = document.querySelector(".close");
    showP5.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    close.addEventListener("click", () => {
        showP5.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    showP5.addEventListener("click", () => {
        showP5.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
integrasi.addEventListener("click", () => {
    const close = document.querySelector(".close");
    showP6.classList.remove("hidden");
    document.querySelector("body").style = "overflow-y: hidden;";

    close.addEventListener("click", () => {
        showP6.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });

    showP6.addEventListener("click", () => {
        showP6.classList.add("hidden");
        document.querySelector("body").style = "overflow-y: auto;";
    });
});
