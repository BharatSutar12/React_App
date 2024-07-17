function jsppractice() {

    // console.log("bubble sort===============")
    // const bubblesort = (array) => {
    //     for (let i = 0; i < array.length - 1; i++) {
    //         let requried = false;
    //         for (let j = 0; j < array.length - i - 1; j++) {
    //             if (array[j] > array[j + 1]) {
    //                 const temp = array[j];
    //                 array[j] = array[j + 1];
    //                 array[j + 1] = temp;
    //                 requried = true;
    //             }
    //         }
    //         if (!requried) {
    //             break;
    //         }
    //     }
    //     return array;
    // }
    // const array = [12, 3, 21, 44, 56, 1, 45, 6];
    // console.log(bubblesort(array))

    // console.log("selection sort============")
    // const selectionsort = (array1) => {
    //     for (let i = 0; i < array1.length - 1; i++) {
    //         let swaparray = i;
    //         for (let j = i + 1; j < array1.length; j++) {
    //             if (array1[j] < array1[swaparray]) {
    //                 swaparray = j;
    //             }
    //         }
    //         const temp = array1[i];
    //         array1[i] = array1[swaparray];
    //         array1[swaparray] = temp;
    //     }
    //     return array1;
    // }
    // const array1 = [40, 60, 20, 50, 10, 30];
    // console.log(selectionsort(array1))
    // // console.log("inseration sort=============")

    // // const inseationsort = (arr) => {
    // //     for (let i = 1; i < arr.length; i++) {
    // //         let currentvalue = arr[i];

    // //         let j
    // //         for (j = i - 1; j >= 0 && arr[j] > currentvalue; j--) {
    // //             arr[j + 1] = arr[j]
    // //         }
    // //         arr[j + 1] = currentvalue;
    // //     }
    // //     return arr
    // // }
    // // const arr = [2, 1, 3, 7, 5];
    // // console.log(inseationsort(arr));

    // console.log("counter letter========")

    // const fname = "BHARAT VINOD SUTAR";

    // const counter = {

    // };
    // for (let i = 0; i < fname.length; i++) {
    //     const letter = fname[i];

    //     if (counter[letter]) {
    //         counter[letter] = counter[letter] + 1
    //     } else {
    //         counter[letter] = 1
    //     }
    // }
    // console.log(counter);

    // console.log("count vowels==============")

    // const checkvowels = (string) => {
    //     const vowels = {
    //         a: true,
    //         e: true,
    //         i: true,
    //         o: true,
    //         u: true,

    //     }
    //     let count = 0;
    //     for (let i = 0; i < string.length; i++) {
    //         const char = string[i];

    //         if (vowels[char]) {
    //             count++
    //         }
    //     }
    //     return count
    // }
    // console.log(checkvowels("bharat"))

    // console.log("finbonacci series==========")

    // const fibonacci = (level) => {
    //     let a = 0;
    //     let b = 1;
    //     const series = [a, b];
    //     let i = 2;

    //     while (i < level) {
    //         const nextnumber = a + b;
    //         series.push(nextnumber);
    //         a = b; b = nextnumber;
    //         i++;
    //     }
    //     return series;
    // }
    // console.log(fibonacci(10));

    // console.log("even odd number");

    // const array3 = [23, 12, 34, 122, 5, 87];

    // const even = [];
    // const odd = [];

    // let i = 0;
    // let j = array3.length - 1;

    // const checknumber = (number) => {
    //     if (number % 2 === 0) {
    //         even.push(number);
    //     } else {
    //         odd.push(number);
    //     }
    // }
    // while (i < j) {
    //     checknumber(array3[i])
    //     checknumber(array3[j]);
    //     i++;
    //     j--;
    // }
    // console.log("even", even);
    // console.log("odd", odd)

    // console.log("lastword in js==============")

    // const string = "bharat reading a story";

    // const checklastword = (string, number) => {
    //     let lastword = "";
    //     let count = 0;
    //     for (let i = string.length - 1; i >= 0; i--) {
    //         if (string[i] !== " ") {
    //             lastword = string[i] + lastword;
    //         } else if (lastword !== " ") {
    //             count++;
    //             if (count === number) {
    //                 break;
    //             }
    //             lastword = "";
    //         }
    //     }
    //     return lastword;
    // }
    // console.log(checklastword(string, 3))

    // console.log("longest word=============");

    // const string1 = "the clean city in Nashik";

    // const word = string1.split(" ");
    // console.log(word)

    // let longestword = word[0];
    // let longestwordlength = longestword.length;

    // for (let i = 1; i < word.length; i++) {
    //     const words = word[i];
    //     const wordlength = words.length;

    //     if (wordlength > longestwordlength) {
    //         longestword = words;
    //         longestwordlength = wordlength;
    //     }
    // }
    // console.log("the longest word: ", longestword)

    // console.log(" max number");

    // const findin = (array) => {
    //     let max = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] > max) {
    //             max = array[i];
    //         }
    //     }
    //     console.log("the max number is : ", max);
    // }
    // findin([12, 23, 45, 56, 400, 56, 67, 78,])

    // console.log("loop object==========")

    // const person = {
    //     name: "bharat",
    //     age: 20,
    //     address: "ganesh colony",
    // }
    // console.log(person.name)

    // const key = Object.keys(person);
    // console.log(key);

    // key.forEach((keys) => {
    //     console.log(keys)

    // });

    // const value = Object.values(person);
    // console.log(value);

    // value.forEach(values => {
    //     console.log(values)

    // });
    // const keyvalue = Object.entries(person);
    // console.log(keyvalue);

    // console.log("object keys=============");

    // const object = {
    //     x: 3,
    //     y: 4,
    //     z: 5,
    //     address: "ganesh colony",
    // };

    // const objectkey = (key) => {
    //     if (object[key]) {
    //         if (object[key] === 'function') {
    //             console.log(object[key]())
    //         } else {
    //             console.log(object[key]);
    //         }
    //     } else {
    //         console.log(`${key} does not exit`)
    //     }
    // }
    // objectkey("address")

    // console.log("palindrem number============")

    // const reverse = (string) => {
    //     let reversestring = "";

    //     for (let i = string.length - 1; i >= 0; i--) {
    //         reversestring = `${reversestring}${string[i]}`;
    //     }
    //     return reversestring;
    // };

    // const palindrom = (string) => {
    //     let originalstring = string;
    //     let reversestring = reverse(string);

    //     if (originalstring === reversestring) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }
    // console.log(palindrom("abcba"));
    const arr = [['a', 1], ['b', 2], ['c', 3]];
    //output {a:1,b:2,c:3};
    const object1 = Object.fromEntries(arr);
    console.log(object1)

    console.log("map funn ===========")
    const x = [1, 2, 3, 4, 5];
    const y = x.map(item => {
        return item * 2
    });
    console.log(y);

    console.log("foreack==========")
    const a = [1, 2, 3, 4, 5];
    a.forEach(item => {
        console.log(item)

    });
    console.log("prime number===========")

    const checkprime = (number) => {
        let isprime = true;
        for (let i = 0; i < number; i++) {
            if (number % 2 === 0) {
                isprime = false;
                console.log(number + " is not prime no")
            }
        } if (isprime) {
            console.log(number + " is prime no")
        }
    }
    checkprime(5)
    checkprime(10)

    console.log("remove duplicate ===============")

    const arr1 = [12, 21, 12, 34, 21, 45, 34, 56];

    const output = [];
    for (let i = 0; i < arr1.length; i++) {
        const number = arr1[i];

        let exit = false;
        for (let j = 0; j < output.length; j++) {
            if (output[j] === number) {
                exit = true;
                break;
            }
        } if (!exit) {
            output.push(number);
        }
    }
    console.log(output);

    console.log("remove ele in array========");

    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
    let removeele = [2, 4, 6, 8];
    let removeelemap = {};

    removeele.forEach(ele => {
        removeelemap[ele] = true;
    });
    console.log(removeelemap)

    let newarray = [];
    for (let i = 0; i < arr2.length; i++) {
        if (!removeelemap[arr2[i]]) {
            newarray.push(arr2[i]);
        }
    }
    console.log(newarray);

    console.log("spread operator=============")

    const A = [1, 2, 3];
    const B = [4, 5];

    const c = [...A, ...B];
    console.log(c);

    const student = [];
    let student1 = {
        id: 1,
        name: "bharat",
        age: 20,
    }
    delete student1.name
    student1.name = "om"

    let student2 = {
        id: 2,
        name: "krishna",
        age: 12,
    };


    student1 = {
        ...student1,
        name: "mayur",
        age: 21,
        address: "shree colony",
    }

    student2 = {
        ...student2,
        id: 3,
        age: 21,
        sex: "male",
    }
    console.log("s1", student1)
    console.log("s2", student2);

    student.push(student1);
    student.push(student2);

    console.log(student)

    //string

    let name = "bharat sutar";
    const newname = name.replace("b", "s");
    console.log(newname)

    let number = 5;
    console.log(++number)
    console.log(+"10" + 10)
    return (
        <>

        </>
    )
}

export default jsppractice;
