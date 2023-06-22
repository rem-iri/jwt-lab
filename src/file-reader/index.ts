import * as fs from 'fs';

// BLOCKING IO
export function blocking() {
    console.log('-- SYNC before readSync');
    const data = fs.readFileSync(
        'C:\\Users\\irire\\Documents\\ET2\\sample.txt'
    );
    console.log('-- SYNC readSync', data.toString());
    console.log('-- SYNC after readSync');
}

// NON-BLOCKING IO
export function nonBlocking() {
    console.log('-- ASYNC before read');
    const data = fs.readFile(
        'C:\\Users\\irire\\Documents\\ET2\\sample.txt',
        (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log('-- ASYNC read', data.toString());
        }
    );
    console.log('-- ASYNC after read');
}
