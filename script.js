if(/\?search=/.test(document.baseURI) == false) {
    document.getElementById("searchContent").addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            search();
        }
    })
    function search() {
        if(document.getElementById("searchContent").value == "") {
            window.alert("You must search something!");
        } else {
            var linkSetup = document.getElementById("searchContent").value.split("+").join("%2B").split(" ").join("+");
            var link = `https://codejourney.site/Projects/let-me-google-that.html?search=${linkSetup}`;
            document.getElementById("log").innerHTML = `Here is your link: <a href="${link}">${link}</a>`
        }
    }
} else {
    document.getElementById("button").disabled = true;
    document.getElementById("searchContent").disabled = true;
    var search = document.baseURI.split("?search=");
    search = search[1].split("+").join(" ").split("%2B").join("+").split("");
    var prompts = "";
    var time = 200;
    var control = 0;
    for(let i = 0; i < search.length; i++) {
        function type() {
            prompts += search[control]
            control++;
            document.getElementById("searchContent").value = prompts;
            if(control == search.length - 1 || search.length == 1) {
                go()
            }
        }
        setTimeout(type, time);
        time += Math.floor(Math.random() * (350 - 150 + 1) + 150);
    }
    function go() {
        document.getElementById("log").innerText = "Wait... that wasn't hard!";
        function search() {
            var linkSetup = document.getElementById("searchContent").value.split(" ").join("+");
            var link = `https://www.google.com/search?client=safari&rls=en&q=${linkSetup}&ie=UTF-8&oe=UTF-8`;
            window.open(link, "_self");
        }
        setTimeout(search, 1000);
    }
}