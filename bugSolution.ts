function printName(name: string | undefined = 'Default'): void {
  console.log(name);
}

printName(); // This will print 'Default'
printName(undefined); // This will print 'undefined'
printName("John Doe"); // This will print "John Doe"