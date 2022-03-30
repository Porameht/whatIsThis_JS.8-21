(() => {
  // start code
  // 1.Lexical scope & Dynamic scope

  const printName = () => {
    console.log(this);
    console.log(`my name is ${this.name}`);
  };

  //2. How to know what is "this"
  function printName() {
    console.log(this);
    console.log(`my name is ${this.name}`);
  }
  //// 2.1 Invoker object
  const porameht = {
    name: "porameht",
    printName,
  };
  const parichad = {
    name: "parichad",
    printName,
  };

  porameht.printName();
  parichad.printName();

  //// 2.2 Global object (window,global)
  name = "global";
  printName();
  // Constructor function
  function printName() {
    console.log(this);
    console.log(`my name is ${this.name}`);
  }

  function Person(name) {
    this.name = name;
    this.printName = printName;
  }

  const frank = new Person("frank");
  frank.printName();

  // 3.call(), apply() and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(
      `my name is ${this.name}, I'm ${nationality} and am living in ${city}`
    );
  }

  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    // printName.call(this, this.nationality, this.city);
    // printName.apply(this, [this.nationality, this.city]);

    // const printPorameht = printName.bind(this);
    // printPorameht("Thai", "Bangkok");
  }

  const poramehtkh = new Person("Porameht", "Thai", "Chonburi");
})();
