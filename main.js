
    let egenerator = () => {
        let chars = "qwertyuioplkjhgfdsazxcvbnm"
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 8; i++) { 
            random = Math.floor(Math.random() * chars.length);
            code += chars[random];
        }
        document.getElementById("place").innerHTML = code;
    }

    let mgenerator = () => {
        let chars = "QWERTYUIOPZXCVBNMASDFGHJKLqwertyuioplkjhgfdsazxcvbnm";
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 7; i++){       
            random = Math.floor(Math.random() * chars.length);
            code += chars[random];
        }
        document.getElementById("place").innerHTML = code;
    }

    let hgenerator = () => {
        let chars = "0295876431";
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 6; i++){       
            random = Math.floor(Math.random() * chars.length);
            console.log(random);
            code += chars[random];
        }
        setTimeout(() => {
        document.getElementById("place").innerHTML = code;
        }, 1000);
        document.getElementById("place").innerHTML = "Generating..."

    }
    document.getElementById("clock").innerHTML = "Loading..."
    setInterval(() => {
        let time = new Date()
        hrs = time.getHours()
        min = time.getMinutes()
        sec = time.getSeconds()
        let median = "AM"
        if (hrs > 12){
           hrs = hrs - 12
           median = "PM"
        }
        if (hrs < 10) {
            hrs = "0" + hrs;
        }
        if (min < 10) {
            min = "0" + min;
        }
        // if (sec < 10) {
        //     sec = "0" + sec;
        // }
        if (sec < 10 && sec >= 0 ) {
            sec = "0" + sec
        }
       document.getElementById("clock").innerHTML ="Time: " +`${hrs}:${min}:${sec} ${median}`
    
    }, 1000);

    function copy() {
        let copyText = document.getElementById("place");
        
        // // copyText.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.innerHTML);
        copyText.innerHTML = 'Done'
    }  
