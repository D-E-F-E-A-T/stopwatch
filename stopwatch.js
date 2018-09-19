class Stopwatch {
    constructor() {
        this.elem = this.display();
        this.createButtons();
        this.counter();
    }

    counter() {
        this.elem.innerHTML += `<br>
            <span>
                ${this.time().minutes}:${this.time().seconds}:${this.time().miliseconds}
            </span>`
    }

    time() {
        const time = {
            miliseconds: 0,
            seconds: 0,
            minutes: 0
        }
        return time
    }

    createButtons() { //we will refer to elements by nodes e.g this.elem.children[0]
        const buttonStart = document.createElement('button');
        const buttonStop = document.createElement('button');
        const buttonLop = document.createElement('button');
        const buttonClear = document.createElement('button');
        const buttonClearLop = document.createElement('button');
        buttonStart.textContent = 'Start';
        buttonStop.textContent = 'stop';
        buttonLop.textContent = 'Lop';
        buttonClear.textContent = 'Clear All';
        buttonClearLop.textContent = 'Clear Lop';
        buttonStart.setAttribute('id', 'btn_start');
        buttonStop.setAttribute('id', 'btn_stop');
        buttonLop.setAttribute('id', 'btn_lop');
        buttonClear.setAttribute('id', 'btn_clear');
        buttonClearLop.setAttribute('id', 'btn_clearLop');
        this.elem.appendChild(buttonStart);
        this.elem.appendChild(buttonStop);
        this.elem.appendChild(buttonLop);
        this.elem.appendChild(buttonClear);
        this.elem.appendChild(buttonClearLop);
    }

    display() {
        const container = document.createElement('div');
        container.setAttribute('id', 'container_id');

        return container
    }
}


const stopwatch = new Stopwatch();
document.body.appendChild(stopwatch.elem);
console.log(stopwatch.time())
