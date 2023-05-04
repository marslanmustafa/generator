
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
        let chars = "(OPASDFGHJKLZXCVqQWERTYUI!@#$%%^&*wertyuio. ?/pasdBNM1234567890fghjklzxcvbnm";
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 8; i++){       
            random = Math.floor(Math.random() * chars.length);
            code += chars[random];
        }
        document.getElementById("place").innerHTML = code;
    }

    function copy() {
        let copyText = document.getElementById("place");
        // // copyText.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.innerHTML);
        copyText.innerHTML = 'Copied'
    }  
