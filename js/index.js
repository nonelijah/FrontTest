function timer() {
    const wrap = document.querySelector(".timer-wrap");

    const times = wrap.querySelector(".times");
    const hrs = times.querySelector("#hrs");
    const min = times.querySelector("#min");
    const sec = times.querySelector("#sec");

    const btns = wrap.querySelector(".btn-group");
    const btnControl = btns.querySelector("#btn-control");
    const btnReset = btns.querySelector("#btn-reset");

    hrs.value = parseInt("00");
    min.value = parseInt("00");
    sec.value = parseInt("00");

    if (hrs.value !== "0" || min.value !== "0" || sec.value !== "0") {
        btnControl.disabled = false;
        btnReset.disabled = false;
    }
}

timer();
