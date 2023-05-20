const initialState = {
    columns: [
      {
        id: '1',
        listId: '1',
        title: 'Books',
        icon: 'book',
      },
      {
        id: '2',
        listId: '1',
        title: 'Movies',
        icon: 'film',
      },
      {
        id: '3',
        listId: '1',
        title: 'Games',
        icon: 'gamepad',
      },
      {
        id: '4',
        listId: '2',
        title: 'Food',
        icon: 'carrot',
      },
      {
        id: '5',
        listId: '2',
        title: 'Drinks',
        icon: 'glass',
      },
      {      
        id: '6',
        listId: '2',
        title: 'Others',
        icon: 'car',
      },
    ],
  
    cards: [
      { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavourite: false },
      { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavourite: false },
      { id: '3', columnId: '2', title: 'Harry Potter', isFavourite: false },
      { id: '4', columnId: '2', title: 'Star Wars', isFavourite: false },
      { id: '5', columnId: '3', title: 'The Witcher', isFavourite: false },
      { id: '6', columnId: '3', title: 'Skyrim', isFavourite: false },
      { id: '7', columnId: '4', title: 'Pizza', isFavourite: false },
      { id: '8', columnId: '4', title: 'Bread', isFavourite: false },
      { id: '9', columnId: '5', title: 'Water', isFavourite: false },
      { id: '10', columnId: '6', title: 'Paper towels', isFavourite: false }
    ],

    searchString: {
      searchString: ''
    },

    lists: [
      {
        id: '1',
        title: 'Things to do',
        description: 'Interesting things I want to do'
      },
     {
        id: '2',
        title: 'Market',
        description: 'Shop list'
     }
   ],
  
  };  
  
  export default initialState;