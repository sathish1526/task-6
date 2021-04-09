var res = document.getElementById("res");
(function () {
    setTimeout(() => {
        res.innerText = 10;
        setTimeout(() => {
            res.innerText = 9;
            setTimeout(() => {
                res.innerText = 8;
                setTimeout(() => {
                    res.innerText = 7;
                    setTimeout(() => {
                        res.innerText = 6;
                        setTimeout(() => {
                            res.innerText = 5;
                            setTimeout(() => {
                                res.innerText = 4;
                                setTimeout(() => {
                                    res.innerText = 3;
                                    setTimeout(() => {
                                        res.innerText = 2;
                                        setTimeout(() => {
                                            res.innerText = 1;
                                            setTimeout(() => {
                                                res.innerText = "Happy Independence Day ";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
})();
