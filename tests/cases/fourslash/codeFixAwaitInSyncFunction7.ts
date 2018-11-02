/// <reference path='fourslash.ts' />

////function f() {
////    for await (const x of []) {
////        console.log(x);
////    }
////}

verify.codeFix({
    description: "Add async modifier to containing function",
    newFileContent:
`async function f() {
    for await (const x of []) {
        console.log(x);
    }
}`,
});
