document.getElementById("name").addEventListener("input", function (e) {
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity(" Please enter a valid name");
    }
});

document.getElementById("email").addEventListener("input", function (e) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity("Please enter a valid email address");
    }
});

document.getElementById("number").addEventListener("input", function (e) {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (e.target.value.match(pattern)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity(
            "Please enter a valid phone number (format: XXX-XXX-XXXX)"
        );
    }
});

function formatPhoneNumber(input) {
    let number = input.value.replace(/[^\d]/g, "");
    if (number.length > 11) {
        number = number.substring(0, 11);
    }
    if (number.length > 3) {
        number = number.substring(0, 3) + "-" + number.substring(3);
    }
    if (number.length > 7) {
        number = number.substring(0, 7) + "-" + number.substring(7, 11);
    }
    input.value = number;
}

document.getElementById("age").addEventListener("input", function (e) {
    let age = e.target.value;
    if (age < 1 || age > 120) {
        alert("Please enter a valid age between 1 and 120.");
        e.target.value = "";
    }
});

document.getElementById("location").addEventListener("input", function (e) {
    let location = e.target.value;
    if (location.trim() === "") {
        alert("Please enter a valid location.");
        e.target.value = "";
    }
});

document.getElementById("favoriteGame").addEventListener("input", function (e) {
    let favoriteGame = e.target.value;
    if (favoriteGame.trim() === "") {
        alert("Please enter your favorite RPG game.");
        e.target.value = "";
    }
});

function checkOther(select) {
    const otherInput = document.getElementById("otherPlatformGroup");
    if (select.value === "others") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}

document.getElementById('source').addEventListener('input', function(e) {
    let source = e.target.value;
    if (source.trim() === '') {
        alert('Please enter how you heard about our survey/game.');
        e.target.value = '';
    }
});

function showToast() {
    $('.toast').toast('show');
}