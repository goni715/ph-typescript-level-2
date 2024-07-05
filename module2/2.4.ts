//* Generic with interface

interface Developer<T, X = null> {   //default value X = null
    name: string;
    computer: {
        brand: string;
        model: string;
        releasedYear: number;
    };
    smartWatch: T;
    bike?: X;
}



type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
}


const poorDeveloper : Developer<EmilabWatch> = {
    name: "Osman Goni",
    computer: {
        brand: 'Asus',
        model: 'X-255UR',
        releasedYear: 2013
    },
    smartWatch: {
        brand: 'Emilab',
        model: 'kw66',
        display: 'OLED'
    }
}






interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack : boolean;
}


interface YamahaBike {
    model: string;
    engineCapacity: string;
}




const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
        brand: 'HP',
        model: 'X-25UR',
        releasedYear: 2018
    },
    smartWatch: {
        brand: 'Apple Watch',
        model: 'something',
        heartTrack: true,
        sleepTrack: true,
    },
    bike: {
        model: 'Yamaha',
        engineCapacity: '100cc'
    }
}