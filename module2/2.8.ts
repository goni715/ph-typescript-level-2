//* promise in typescript


//stimulate

const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject)=>{
        const data: string = "something"

        if(data){
            resolve(data)
        }
        else{
            reject("failed to load data");
        }
    })
}


//calling create promise function
const showData = async ()=>{
    const data: string = await createPromise();
    console.log(data);
}





/*------------------------------- Example-02 ---------------------------------*/
//promise will return object type data

type Something = {something: string}

const createPromise2 = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject)=>{
        const data: Something ={something: "something"}

        if(data){
            resolve(data)
        }
        else{
            reject("failed to load data");
        }
    })
}


//calling create promise2 function// following function will return a promise
const showData2 = async (): Promise<Something>=>{
    const data: Something = await createPromise2();
    return data;
}







//* api promise calling

type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<Todo>=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

getTodo();