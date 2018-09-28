class Stopwatch {
    constructor() {
        this.elem = this.display(); //main parent (container)
        this.times = this.time();
        this.flag = false; //to prevent duble click
        this.createElements();
        this.handleElements();
        this.counter();
    }

    start() {
        if(!this.flag){
            this.myTimer = setInterval(() => {
                this.times.miliseconds++
                this.calculate();
                this.counter();
                this.flag = true;
            }, 10)
        }
    }

    stop() {
        this.flag = false;
        clearInterval(this.myTimer);
    }

    split() {
        let i = 0;
        if(this.times.miliseconds != 0) {
            const li = document.createElement('li');
            this.elem.childNodes[6].appendChild(li);
            li.innerHTML = `${this.show}`;

            while (i< document.getElementsByTagName('li').length && i != 0) {
                let x = i + 1
               if(document.getElementsByTagName('li')[i].innerText == document.getElementsByTagName('li')[x].innerText) {
                    console.log('yes it is', document.getElementsByTagName('li')[i], '=', document.getElementsByTagName('li')[x])
                } else {
                    console.log('nope')

                    console.log('nope', document.getElementsByTagName('li')[i], '=', document.getElementsByTagName('li')[x])
                }
                i++
            }
        }
    }

    clearSplit() {
        const li_Elem = this.elem.childNodes[6].children.length
        if (li_Elem != 0 ) {
            let i = li_Elem
            while(i) {
                i--
                this.elem.childNodes[6].children[i].remove();
            }
        }
    }

    clearAll() {
        this.times.minutes = 0;
        this.times.seconds = 0;
        this.times.miliseconds = 0;
        this.counter();
        this.clearSplit();
        clearInterval(this.myTimer);
        this.flag = false;
    }

    counter() {
        this.show = this.elem.childNodes[0].innerHTML = `
            ${this.addZero(this.times.minutes)}:${this.addZero(this.times.seconds)}:${this.addZero(this.times.miliseconds)}`
    }

    time() {
        const time = {
            miliseconds: 0,
            seconds: 0,
            minutes: 0
        }
        return time
    }

    handleElements() {
        this.elem.childNodes[1].onclick = () => {
            this.start();
        }
        this.elem.childNodes[2].onclick = () => {
            this.stop();
        }
        this.elem.childNodes[3].onclick = () => {
            this.split();
        }
        this.elem.childNodes[4].onclick = () => {
            this.clearSplit();
        }
        this.elem.childNodes[5].onclick = () => {
            this.clearAll();
        }
        //NodeList = console.log(this.elem.childNodes)
    }

    addZero(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result

        }
        return result
    }

    calculate() {
        if(this.times.miliseconds >= 100) {
            this.times.seconds++
            this.times.miliseconds = 0
        } else if(this.times.seconds >= 60) {
            this.times.minutes++
            this.times.seconds = 0
        }
    }

    createElements() { //we will refer to elements by nodes e.g this.elem.children[0] //this.elem.childNodes[length]
        const buttonStart = document.createElement('button');
        const buttonStop = document.createElement('button');
        const buttonSplit = document.createElement('button');
        const buttonClear = document.createElement('button');
        const buttonClearSplit = document.createElement('button');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        buttonStart.textContent = 'Start';
        buttonStop.textContent = 'Stop';
        buttonSplit.textContent = 'Split';
        buttonClear.textContent = 'Clear All';
        buttonClearSplit.textContent = 'Clear Split';
        buttonStart.setAttribute('id', 'btn_start');
        buttonStop.setAttribute('id', 'btn_stop');
        buttonSplit.setAttribute('id', 'btn_lop');
        buttonClear.setAttribute('id', 'btn_clear');
        buttonClearSplit.setAttribute('id', 'btn_clearLop');
        buttonStart.setAttribute('class', 'btn start');
        buttonStop.setAttribute('class', 'btn stop');
        buttonSplit.setAttribute('class', 'btn lop');
        buttonClear.setAttribute('class', 'btn clear');
        buttonClearSplit.setAttribute('class', 'btn clearLop');
        span.setAttribute('class', 'timer');
        this.elem.appendChild(span);
        this.elem.appendChild(buttonStart);
        this.elem.appendChild(buttonStop);
        this.elem.appendChild(buttonSplit);
        this.elem.appendChild(buttonClearSplit);
        this.elem.appendChild(buttonClear);
        this.elem.appendChild(ol);
    }

    display() {
        const container = document.createElement('div');
        container.setAttribute('id', 'container_id');
        container.setAttribute('class', 'container_class');

        return container
    }
}

const stopwatch = new Stopwatch();
document.body.appendChild(stopwatch.elem);
