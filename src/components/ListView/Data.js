const initialAccordionData = [
    {
      id: 1,
      userPhoto: 'https://randomuser.me/api/portraits/med/men/93.jpg',
      userName: 'John Doe',
      age: '20 Years',
      gender: 'Female',
      country: 'India',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      userPhoto: 'https://randomuser.me/api/portraits/med/women/48.jpg',
      userName: 'Alice Smith',
      age: '25 Years',
      gender: 'Male',
      country: 'USA',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      userPhoto: 'https://randomuser.me/api/portraits/med/men/27.jpg',
      userName: 'Bob Johnson',
      age: '30 Years',
      gender: 'Male',
      country: 'Canada',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      userPhoto: 'https://randomuser.me/api/portraits/med/men/34.jpg',
      userName: 'Jane Smith',
      age: '22 Years',
      gender: 'Male',
      country: 'Australia',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      userPhoto: 'https://randomuser.me/api/portraits/med/women/90.jpg',
      userName: 'Eva Johnson',
      age: '28 Years',
      gender: 'Female',
      country: 'UK',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      userPhoto: 'https://randomuser.me/api/portraits/med/women/91.jpg',
      userName: 'Charlie Brown',
      age: '35 Years',
      gender: 'Non-binary',
      country: 'Germany',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 7,
      userName: "یاسمن"   ,
      age: '29 Years',
      gender: "female",
      userPhoto: "https://randomuser.me/api/portraits/med/women/64.jpg",
      country: "Iran",
      description: "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران."
    },
    {
      id: 8,
      userName: "Reingard Barz",
      
      age: "36years",
      gender: "female",
      
      userPhoto: "https://randomuser.me/api/portraits/med/women/95.jpg",
      country: "Germany",
      description: "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz."
    },
    {
      id: 9,
       userName: "Felix Douglas",
  
      age: "38year",
      gender: "male",
      
      userPhoto: "https://randomuser.me/api/portraits/med/men/53.jpg",
      country: "United Kingdom",
      description: "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas."
    },
    {
      id: 10,
       userName: "Claire Robertson",
      
      age: "17years",
      gender: "female",
      
      userPhoto: "https://randomuser.me/api/portraits/med/women/75.jpg",
      country: "United States",
      description: "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson."
    },
    {
      id: 11,
       userName: "Ümit Taşlı",
      
      age: "19years",
      gender: "male",
      userPhoto: "https://randomuser.me/api/portraits/med/men/80.jpg",
      country: "Turkey",
      description: "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı."
    },
    {
      id: 12,
       userName: "Tiemo Monshouwer",
      
      age: "39years",
      gender: "male",
      
      userPhoto: "https://randomuser.me/api/portraits/med/men/16.jpg",
      country: "Netherlands",
      description: "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer."
    },
    {
      id: 13,
       userName: "Dorian Carpentier",
     
      age: "1963-10-06",
      gender: "male",
 
      userPhoto: "https://randomuser.me/api/portraits/med/men/77.jpg",
      country: "France",
      description: "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier."
    },
    {
      id: 14,
       userName: "آرمیتا موسوی" ,
     
      age: "55years",
      gender: "female",
    
      userPhoto: "https://randomuser.me/api/portraits/med/women/59.jpg",
      country: "Iran",
      description: "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی."
    },
    {
      id: 15,
       userName: "Lias Korsvik",
      
      age: "54year",
      gender: "male",
    
      userPhoto: "https://randomuser.me/api/portraits/med/men/69.jpg",
      country: "Norway",
      description: "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik."
    },
    {
      id: 16,
       userName: "Florence Cooper",
      
      age: "34years",
      gender: "female",
      
      userPhoto: "https://randomuser.me/api/portraits/med/women/19.jpg",
      country: "Ireland",
      description: "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper."
    },
    {
      id: 17,
       userName: "Donald Harrison",
      
      age: "56years",
      gender: "male",
      
      userPhoto: "https://randomuser.me/api/portraits/med/men/34.jpg",
      country: "United Kingdom",
      description: "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison."
    },
    {
      id: 18,
       userName: "Michael Nichols ",
      
      age: "78years",
      gender: "male",
      
      userPhoto: "https://randomuser.me/api/portraits/med/men/76.jpg",
      country: "United Kingdom",
      description: "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols."
    },
    {
      id: 19,
       userName: "Emile Miller",
      
      age: "30years",
      gender: "male",
      
      userPhoto: "https://randomuser.me/api/portraits/med/men/24.jpg",
      country: "Canada",
      description: "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller."
    },
    {
      id: 20,
       userName: "Marjella Stuijt",
     
      age: "58years",
      gender: "female",
      
      userPhoto: "https://randomuser.me/api/portraits/med/women/31.jpg",
      country: "Netherlands",
      description: "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt."
    }
  ];
  
  export default initialAccordionData;
  