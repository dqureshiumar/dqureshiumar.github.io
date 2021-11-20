function sendmail() {
    document.getElementById("mypara").style.display = "block";
    var e = document.getElementById("name").value,
        o = document.getElementById("subject").value,
        c = document.getElementById("email").value,
        t = "<p>" + e + " has contacted you </p><p>Email - " + c + "</p><p>Subject:" + o + "</p><p>The message is " + document.getElementById("description").value + "</p>";
    Email.send({ SecureToken: "5b29d001-0c71-44da-a465-8794ff5c7ee5", To: c, From: "dqureshiumar@gmail.com", Subject: "Response Recorded", Body: "Thank you for contacting us. We will get back to you shortly" }).then(function (e) {
    }),
        Email.send({ SecureToken: "94e723de-8bfb-4200-9ab7-c6b294e0ef6b", To: "dqureshiumar@gmail.com", From: "uqureshi269@gmail.com", Subject: o, Body: t }).then(function (e) {
            swal("Good Job!", "Mail Sent Successfully", "success"),
                document.referrer !== document.location.href &&
                    setTimeout(function () {
                        document.location.reload();
                    }, 1e3);
        });
}
