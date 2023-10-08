  const array1 = [
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3" },
  ];

  const array2 = [

    { id: 4, name: "Object 2" },
    { id: 4, name: "Object 4" },
    { id: 5, name: "Object 5" },
  ];

  
  const intersection = array1.filter((obj1) =>
    array2.some((obj2) => obj2.name === obj1.name)
  );

  console.log(intersection);
