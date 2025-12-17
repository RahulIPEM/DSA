const starSquare = (n: number): void => {
    for(let i = 0; i < n; i++) {
        let row:string = '';
        for(let j = 0; j < n; j++) {
            row += j === 0 ? '*' : ' *';
        }
        console.log(row)
    }
}
// starSquare(4)

const left90Triangle = (n: number): void => {
    for (let i = 0; i < n; i++) {
        let row: string = '';
        for (let j = 0; j <= i; j++) {
            row += j === 0 ? '*' : ' *'
        }
        console.log(row)
    }
}
// left90Triangle(4)

const leftNumTriangle = (n: number): void => {
    for (let i = 0; i < n; i++) {
        let row: string = '';
        for (let j = 0; j <= i; j++) {
            row += j === 0 ? `${j + 1}` : ` ${j + 1}`
        }
        console.log(row)
    }
}
// leftNumTriangle(4)

const leftSameNumRowTriangle = (n: number): void => {
    for (let i = 0; i < n; i++) {
        let row: string = '';
        for (let j = 0; j <= i; j++) {
            row += j === 0 ? `${i + 1}` : ` ${i + 1}`
        }
        console.log(row)
    }
}
// leftSameNumRowTriangle(5)

const leftTopDownRightTriangle = (n: number): void => {
    for (let i = n; i > 0; i--) {
        let row: string = '';
        for (let j = 0; j < i; j++) {
            row += j === 0 ? `${j + 1}` : ` ${j + 1}`
        }
        console.log(row)
    }
}
// leftTopDownRightTriangle(5)

const rightTopDownRightTriangle = (n: number): void => {
    for (let i = 0; i < n; i++) {
        let row: string = '';
        for (let j = 0; j < n; j++) {
            row += j < (n - (i + 1)) ? ' ' : '*'
        }
        console.log(row)
    }
}
// rightTopDownRightTriangle(5)

const rightBinaryTriangle = (n: number): void => {
    for (let i = 1; i <= n; i++) {
        let row: string = '';
        for (let j = 1; j <= i; j++) {
            row += j % 2
        }
        console.log(row)
    }
}
// rightBinaryTriangle(6)

const rightBinaryEx1Triangle = (n: number): void => {
    let toggle: number = 1;
    for (let i = 1; i <= n; i++) {
        let row: string = '';
        for (let j = 1; j <= i; j++) {
            row += toggle
            if (toggle === 1) {
                toggle = 0;
            } else {
                toggle = 1;
            }
        }
        console.log(row)
    }
}
rightBinaryEx1Triangle(6)