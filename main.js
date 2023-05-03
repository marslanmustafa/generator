
    let egenerator = () => {
        let chars = "qwertyuiopasdfghjklzxcvbnm"
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 8; i++) { 
            random = Math.floor(Math.random() * chars.length);
            code += chars[random];
        }
        document.getElementById("place").value = code;
    }

    let mgenerator = () => {
        let chars = "QWERTYUIOPZXCVBNMASDFGHJKLqwertyuioplkjhgfdsazxcvbnm";
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 7; i++){       
            random = Math.floor(Math.random() * chars.length);
            code += chars[random];
        }
        document.getElementById("place").value = code;
    }

    let hgenerator = () => {
        let chars = "(OPASDFGHJKLZXCVqQWERTYUI!@#$%%^&*wertyuio. ?/pasdBNM1234567890fghjklzxcvbnm";
        console.log(chars.length);
        let code = '';
        for (var i = 1; i <= 8; i++){       
            random = Math.floor(Math.random() * chars.length);
            code += chars[random];
        }
        document.getElementById("place").value = code;
    }

    function copy() {
        var copyText = document.getElementById("place");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        copyText.value = 'Copied'
    }  
