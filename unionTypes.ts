function statusCode( code: number | string) {
    console.log(`My status code is ${code.toUpperCase()}`);
} 
statusCode(404);
statusCode("404");