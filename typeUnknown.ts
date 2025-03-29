let w: unknown = 1;
w = 'name';
w = { 
    runANonExistentMethod: () => {
      console.log("I think therefore I am");
    } 
  } as { runANonExistentMethod: () => void }